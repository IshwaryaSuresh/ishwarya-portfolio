import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '../public/uploads/kaizen/screens');
fs.mkdirSync(OUT, { recursive: true });

// 4:3 at high quality — 1600×1200
const W = 1600, H = 1200;

const SCREENS = [
  { hash: 'marketing',     file: 'marketing' },
  { hash: 'onboarding',    file: 'onboarding' },
  { hash: 'dashboard',     file: 'dashboard' },
  { hash: 'budget',        file: 'budget' },
  { hash: 'goals',         file: 'goals' },
  { hash: 'invest',        file: 'invest' },
  { hash: 'transactions',  file: 'transactions' },
  { hash: 'settings',      file: 'settings' },
];

const BASE = 'http://localhost:5173/kaizen/Kaizen.html';

async function shoot() {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();

  // Load once to prime React
  await page.goto(`${BASE}#marketing`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => document.body.getAttribute('data-theme') === 'quiet', { timeout: 10000 });

  for (const { hash, file } of SCREENS) {
    // Navigate via hash
    await page.evaluate(h => { window.location.hash = h; }, hash);
    await page.waitForTimeout(600);

    // Wait for the correct screen to be rendered
    await page.waitForFunction(
      h => document.querySelector(`[data-screen-label="${h}"]`) !== null,
      hash, { timeout: 8000 }
    ).catch(() => {});

    await page.waitForTimeout(400);

    const dest = path.join(OUT, `${file}.png`);
    await page.screenshot({ path: dest, fullPage: false });
    console.log(`✓  ${file}.png`);
  }

  await browser.close();
  console.log(`\nAll screenshots saved to: ${OUT}`);
}

shoot().catch(err => { console.error(err); process.exit(1); });
