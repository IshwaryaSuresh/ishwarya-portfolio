// Regenerates public/uploads/setmore/spread.png from the Setmore prototype:
// crops the product marketing card only (logo + device mockups), excluding all
// page chrome, and pads it to the homepage spread ratio (4:3 + 16% overscan).
import { chromium } from 'playwright'
import { execFileSync } from 'child_process'

const URL = 'https://www.figma.com/proto/CQ6GYNezQRELW9GmpGaLIN/Portfolio?node-id=1-979&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 3 })
await page.goto(URL, { waitUntil: 'networkidle' })
await page.waitForTimeout(6000)
for (const b of await page.$$('button')) {
  if (/do not allow/i.test((await b.textContent()) || '')) { await b.click().catch(() => {}); break }
}
await page.waitForTimeout(1500)
await page.screenshot({ path: 'public/uploads/setmore/_raw.png' })
await browser.close()

execFileSync('python3', ['-c', `
from PIL import Image
src = Image.open('public/uploads/setmore/_raw.png')
card = src.crop((606, 441, 3714, 1350))
w, h = card.size
th = int(w / 1.1494)
c = Image.new('RGB', (w, th), (255, 255, 255))
c.paste(card, (0, (th - h) // 2))
c.save('public/uploads/setmore/spread.png')
import os; os.remove('public/uploads/setmore/_raw.png')
print('spread.png', c.size)
`], { stdio: 'inherit' })
