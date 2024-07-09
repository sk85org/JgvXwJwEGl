const { webkit, devices } = require('playwright');

(async () => {
  const browser = await webkit.launch(); // or 'firefox','chromium'
  const url = 'https://www.ugtop.com/spill.shtml'
  const context = await browser.newContext({
    
    locale: 'ja'
  });
  const page = await context.newPage();
  await page.goto(url);
  
  await page.screenshot({ path: 'example.png' });
  await browser.close();
})().catch(error => { console.log(error) });

