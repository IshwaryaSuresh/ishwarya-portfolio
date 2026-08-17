// Pulls the three Setmore assets the case study was missing from the same
// prototype spread.png comes from: the Reviews before/after pair and the
// appointment-widget component board. Crops are taken at a 1440x1600 viewport
// (deviceScaleFactor 2) after fixed 1300px wheel steps, matching the offsets
// the crop boxes below were measured against.
import { chromium } from 'playwright'
import { execFileSync } from 'child_process'

const URL = 'https://www.figma.com/proto/CQ6GYNezQRELW9GmpGaLIN/Portfolio?node-id=1-979&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
const DIR = 'public/uploads/setmore'

// step: how many 1300px wheel notches down; box: crop in device pixels.
// The share crops take the tallest framing of each dialog on the page, so the
// pinned scrollytelling stage fills rather than letterboxing a wide strip.
const SHOTS = [
  { step: 3, name: 'reviews-new-ui', box: [550, 712, 2330, 1888] },
  { step: 6, name: 'share-link', box: [582, 726, 2298, 2456] },
  // Generous boxes; `trim` shrinks them back to the dialog's own edges so a
  // mis-measured bound clips nothing.
  { step: 8, name: 'share-social', box: [600, 930, 2280, 1540], trim: true },
  { step: 8, name: 'share-messaging', box: [600, 1740, 2280, 2825], trim: true },
  { step: 11, name: 'earth-board', box: [403, 1046, 2477, 1893] },
]

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 1600 }, deviceScaleFactor: 2 })
await page.goto(URL, { waitUntil: 'networkidle' })
await page.waitForTimeout(6000)
for (const b of await page.$$('button')) {
  if (/do not allow/i.test((await b.textContent()) || '')) { await b.click().catch(() => {}); break }
}
await page.waitForTimeout(1500)

const last = Math.max(...SHOTS.map(s => s.step))
for (let i = 0; i <= last; i++) {
  if (SHOTS.some(s => s.step === i)) await page.screenshot({ path: `${DIR}/_raw-${i}.png` })
  await page.mouse.move(720, 800)
  await page.mouse.wheel(0, 1300)
  await page.waitForTimeout(900)
}
await browser.close()

execFileSync('python3', ['-c', `
from PIL import Image
import os
shots = ${JSON.stringify(SHOTS.map(s => [s.step, s.name, s.box, s.trim ? 1 : 0]))}
for step, name, box, trim in shots:
    im = Image.open('${DIR}/_raw-%d.png' % step).convert('RGB').crop(tuple(box))
    if trim:
        # The page behind is near-black; the dialog is white. Shrink to it.
        bbox = im.convert('L').point(lambda p: 255 if p > 40 else 0).getbbox()
        im = im.crop(bbox)
    im.save('${DIR}/%s.png' % name)
    print(name, im.size, round(im.size[0] / im.size[1], 2))
for step in set(s[0] for s in shots):
    os.remove('${DIR}/_raw-%d.png' % step)
`], { stdio: 'inherit' })
