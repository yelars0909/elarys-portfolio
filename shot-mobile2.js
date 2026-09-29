const { chromium, devices } = require('playwright-core');
(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const ctx = await browser.newContext({ ...devices['iPhone 14'] });
  const page = await ctx.newPage();
  await page.goto('http://localhost:8799/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(9000);
  await page.screenshot({ path: '/tmp/our-mobile-1.png' });
  // 展开第一个项目的 INFO
  await page.evaluate(() => {
    const els = Array.from(document.querySelectorAll('div')).filter(d => d.textContent.trim() === 'INFO' && d.className.includes('cursor-pointer'));
    if (els[0]) els[0].click();
  });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: '/tmp/our-mobile-2.png' });
  // 打开头部 INFO 弹层
  await page.evaluate(() => {
    const h = Array.from(document.querySelectorAll('header span')).find(s => s.textContent.trim() === 'INFO');
    if (h) h.click();
  });
  await page.waitForTimeout(1000);
  await page.evaluate(() => { const ov = document.querySelector('.fixed.inset-0'); if (ov) { const p = Array.from(ov.querySelectorAll('p')).find(x=>x.textContent.trim()==='ABOUT'); if(p) p.click(); } });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: '/tmp/our-mobile-3.png' });
  await browser.close();
  console.log('done');
})();
