const { chromium, devices } = require('playwright-core');
(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const ctx = await browser.newContext({ ...devices['iPhone 14'] });
  const page = await ctx.newPage();
  await page.goto('https://studiodpi.work/', { waitUntil: 'networkidle', timeout: 60000 }).catch(()=>{});
  await page.waitForTimeout(4000);
  await page.screenshot({ path: '/tmp/orig-mobile-1.png' });
  // 滚动看下面
  await page.mouse.wheel(0, 800);
  await page.waitForTimeout(1500);
  await page.screenshot({ path: '/tmp/orig-mobile-2.png' });
  await browser.close();
  console.log('done');
})();
