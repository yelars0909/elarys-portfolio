// Visual QA driver: loads the clone, exercises interactions, saves screenshots.
import { chromium } from "playwright-core";

const OUT = "/Users/Apple/Documents/kimi/tasks/2026-09-26/16-15-59-d63a9a22/ai-website-cloner/docs/design-references/studiodpi-work-708a7940/root-8a5edab2";
const BASE = process.env.QA_BASE || "http://localhost:7100";

const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto(BASE, { waitUntil: "networkidle" });
await page.waitForTimeout(2500);
await page.screenshot({ path: `${OUT}/clone-1440-top.png` });

// marquee should auto-scroll: sample strip transform twice
const stripT1 = await page.evaluate(() => {
  const inner = document.querySelector("[data-dpi-strip-inner]");
  return inner ? getComputedStyle(inner.children[1] || inner).transform : "missing";
});
await page.waitForTimeout(1000);
const stripT2 = await page.evaluate(() => {
  const inner = document.querySelector("[data-dpi-strip-inner]");
  return inner ? getComputedStyle(inner.children[1] || inner).transform : "missing";
});

// expand first project
await page.locator("text=TYPE.").first().click();
await page.waitForTimeout(1200);
await page.screenshot({ path: `${OUT}/clone-1440-item-expanded.png` });

// collapse again
await page.locator("text=INFO").first().click();
await page.waitForTimeout(400);

// random overlay
await page.locator("text=DOTs ON i").click();
await page.waitForTimeout(800);
await page.screenshot({ path: `${OUT}/clone-1440-random-overlay.png` });
await page.locator("main").click({ position: { x: 100, y: 500 } });
await page.waitForTimeout(300);

// hover carousel to reveal cursor label
const swiper = page.locator('[id^="DPI_SWIPER_EVENT_"]').first();
await swiper.hover({ position: { x: 500, y: 300 } });
await page.waitForTimeout(400);
await page.screenshot({ path: `${OUT}/clone-1440-carousel-hover.png` });

// category filter: BOOK
await page.locator("text=BOOK").first().click();
await page.waitForTimeout(1200);
await page.screenshot({ path: `${OUT}/clone-1440-filter-book.png` });

// back to ALL, then click strip item 5 to jump
await page.locator("text=ALL PROJECTS").click();
await page.waitForTimeout(800);

// mobile viewport
await page.setViewportSize({ width: 390, height: 844 });
await page.waitForTimeout(800);
await page.screenshot({ path: `${OUT}/clone-390-viewport.png` });

console.log(JSON.stringify({ stripT1, stripT2, marqueeMoves: stripT1 !== stripT2 }));
await browser.close();
