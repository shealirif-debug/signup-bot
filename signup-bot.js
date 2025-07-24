const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://moneysocial.daluan3.top/69499169773501');

  // Simulate a form (update selectors below as needed)
  await page.fill('input[name="name"]', 'Bot User');
  await page.fill('input[name="email"]', 'botuser@example.com');
  await page.click('button[type="submit"]');

  await page.waitForTimeout(2000);
  await browser.close();
})();
