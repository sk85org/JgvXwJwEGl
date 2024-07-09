const { webkit, devices } = require('playwright');

(async () => {
  const browser = await webkit.launch(); // or 'firefox','chromium'
  const url = 'https://ssnb.x.moneyforward.com/users/sign_in'
  const context = await browser.newContext({
    
    locale: 'ja'
  });
  const page = await context.newPage();
  await page.goto(url);
  
  await page.fill('#sign_in_session_service_email', process.env.EMAIL);
  await page.fill('#sign_in_session_service_password', process.env.PASSWORD);
  await page.screenshot({ path: 'example.png' });
  // Click the button
  await page.click('#login-btn-sumit');
  //await page.waitForTimeout(5000);
  await page.locator('.not-now').first().click();
  await page.locator('a:has-text("口座")').click();
  //page.locator('.ga-refresh-account-button').click();

  await page.waitForSelector('.ga-refresh-account-button')
  const buttons = page.locator('.ga-refresh-account-button');
  const buttonCount = await buttons.count();

  for (let i = 0; i < buttonCount; i++) {
    await buttons.nth(i).click();
  }

  
  
  await browser.close();
})().catch(error => { console.log(error) });

