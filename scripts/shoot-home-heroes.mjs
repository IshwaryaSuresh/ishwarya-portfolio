import { chromium } from 'playwright'

const shots = [
  { url: 'http://localhost:5199/kaizen/Kaizen.html', out: 'public/uploads/kaizen/home-hero.png' },
  { url: 'http://localhost:5199/ledgerline-prototype/', out: 'public/uploads/ledgerline/home-hero.png' },
]

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1600, height: 1200 }, deviceScaleFactor: 2 })

for (const s of shots) {
  await page.goto(s.url, { waitUntil: 'networkidle' })
  await page.waitForTimeout(2500)
  await page.screenshot({ path: s.out })
  console.log('shot', s.out)
}
await browser.close()
