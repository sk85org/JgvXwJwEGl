const { chromium } = require('playwright'); // Playwrightモジュールをインポート

(async () => {
  // Chromiumブラウザインスタンスを起動
  const browser = await chromium.launch();
  // 新しいブラウザコンテキストを作成
  const context = await browser.newContext();
  // 新しいページを開く
  const page = await context.newPage();
  // Googleのホームページにアクセス
  await page.goto('https://www.google.com');
  // スクリーンショットを保存
  await page.screenshot({ path: '/google_screenshot.png' });
  // ブラウザを閉じる
  await browser.close();
})();
