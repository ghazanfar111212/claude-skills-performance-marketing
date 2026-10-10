#!/usr/bin/env node
/**
 * design-qa screenshot runner
 * Usage: node scripts/screenshot.js path/to/page.html [outdir]
 * Outputs: <outdir>/<name>-390.png (mobile full), <name>-390-fold.png (mobile fold),
 *          <name>-1440.png (desktop full)
 */
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const file = process.argv[2];
  if (!file) { console.error('Usage: node screenshot.js path/to/page.html [outdir]'); process.exit(1); }
  const outdir = process.argv[3] || 'qa';
  fs.mkdirSync(outdir, { recursive: true });
  const name = path.basename(file).replace(/\.html?$/i, '');
  const url = 'file://' + path.resolve(file);

  const browser = await chromium.launch();

  // Mobile - iPhone-ish
  const mob = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  await mob.goto(url, { waitUntil: 'networkidle' });
  await mob.waitForTimeout(1200); // let fonts + reveal animations settle
  await mob.screenshot({ path: `${outdir}/${name}-390-fold.png` });               // above the fold
  await mob.screenshot({ path: `${outdir}/${name}-390.png`, fullPage: true });    // full page
  // overflow check
  const overflow = await mob.evaluate(() =>
    document.documentElement.scrollWidth > document.documentElement.clientWidth);
  if (overflow) console.warn('⚠ HORIZONTAL OVERFLOW at 390px - find and fix the offending element.');
  await mob.close();

  // Desktop
  const desk = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1.5 });
  await desk.goto(url, { waitUntil: 'networkidle' });
  await desk.waitForTimeout(1200);
  await desk.screenshot({ path: `${outdir}/${name}-1440.png`, fullPage: true });
  await desk.close();

  await browser.close();
  console.log(`Done → ${outdir}/${name}-390-fold.png, ${name}-390.png, ${name}-1440.png`);
})();
