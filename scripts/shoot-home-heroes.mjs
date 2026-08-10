import { chromium } from 'playwright'

// Shoot at the exact spread ratio: slot is 4:3 and the <img> is 116%
// tall for parallax travel, so the frame must be 4 : 3.48 = 1600x1392.
const W = 1600, H = 1392

const shots = [
  { url: 'http://localhost:5199/kaizen/Kaizen.html',              out: 'public/uploads/kaizen/spread-plate.png' },
  { url: 'http://localhost:5199/ledgerline-prototype/index.html', out: 'public/uploads/ledgerline/spread-plate.png' },
]

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 2 })

for (const s of shots) {
  await page.goto(s.url, { waitUntil: 'networkidle' })
  await page.waitForTimeout(2500)
  await page.screenshot({ path: s.out })
  console.log('shot', s.out, await page.title())
}
await browser.close()
