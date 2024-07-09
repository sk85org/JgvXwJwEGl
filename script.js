const { chromium } = require('playwright'); 

(async () => {
  const browser = await chromium.launch(); 
  const url = 'https://ssnb.x.moneyforward.com'
  const context = await browser.newContext({
    
    locale: 'ja'
  });
  const page = await context.newPage();
  await page.goto(url);
  

  await page.screenshot({ path: 'example.png' });
  await browser.close();
})().catch(error => { console.log(error) });

