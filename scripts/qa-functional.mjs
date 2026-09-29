// Functional QA: expand/collapse toggle, strip click → right column jump, overlay dismiss.
import { chromium } from "playwright-core";

const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:7100", { waitUntil: "networkidle" });
await page.waitForTimeout(2000);

const itemHide = page.locator("#right-item-50 > div:nth-child(2)");
const h0 = await itemHide.evaluate((el) => el.getBoundingClientRect().height);

// expand
await page.locator("#right-item-50 >> text=INFO").click();
await page.waitForTimeout(300);
const h1 = await itemHide.evaluate((el) => el.getBoundingClientRect().height);

// collapse
await page.locator("#right-item-50 >> text=INFO").click();
await page.waitForTimeout(300);
const h2 = await itemHide.evaluate((el) => el.getBoundingClientRect().height);

// strip click → right column scrolls to project index 4 (5th)
const scroll0 = await page.evaluate(() => document.querySelectorAll(".dpi-scrollbar-hidden")[1]?.scrollTop ?? -1);
await page.locator("[data-dpi-strip-inner] > div:nth-child(2) > div").nth(4).dispatchEvent("click");
await page.waitForTimeout(1500);
const rightScroll = await page.evaluate(() => {
  const cols = [...document.querySelectorAll("div")].filter(
    (d) => d.className.includes("overflow-y-auto") && d.scrollHeight > 2000,
  );
  return cols.map((c) => Math.round(c.scrollTop));
});

// overlay: open then dismiss
await page.locator("text=DOTs ON i").click();
await page.waitForTimeout(400);
const overlayVisible = await page.locator(".fixed.inset-0.z-\\[999\\] img").isVisible();
await page.locator("main").click({ position: { x: 60, y: 700 } });
await page.waitForTimeout(400);
const overlayAfter = await page.locator(".fixed.inset-0.z-\\[999\\] img").count();

console.log(JSON.stringify({
  collapseDefault: h0,
  expanded: h1,
  collapsedAgain: h2,
  toggleWorks: h0 === 0 && h1 > 0 && h2 === 0,
  rightScrollAfterStripClick: rightScroll,
  overlayVisible,
  overlayAfterDismiss: overlayAfter,
}));
await browser.close();
