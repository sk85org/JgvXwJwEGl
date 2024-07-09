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
  
  
  await browser.close();
})().catch(error => { console.log(error) });

