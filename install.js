(async () => {
    const install = require("./lib/puppeteer/install")
})();   


// const puppeteer = require('./lib/puppeteer');


// (async () => {
//     const browser = await puppeteer.launch({
//         executablePath: './lib/puppeteer/chrome-win32/chrome.exe'
//     });
//     const page = await browser.newPage();
//     await page.goto('https://y.qq.com');
//     await page.screenshot({path: 'yqq.png'});
//     browser.close();
// })();   