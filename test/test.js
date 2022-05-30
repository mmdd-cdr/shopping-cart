const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();

  await page.goto("http://127.0.0.1:3000/", { waitUntil: "networkidle0" });
  await page.mouse.click(1160, 28);
  await page.screenshot({ path: "./test/空购物车.png" });
  await page.mouse.click(782, 25);
  await page.mouse.click(357, 623);
  await page.screenshot({ path: "./test/添加第一个产品.png" });
  await page.mouse.click(593, 623);
  await page.screenshot({ path: "./test/添加第二个产品.png" });
  await page.mouse.click(833, 623);
  await page.screenshot({ path: "./test/添加第三个产品.png" });
  await page.mouse.click(1160, 28);
  await setTimeout(async () => { //等待动画时间
    await page.mouse.click(1151, 164);
    await page.screenshot({ path: "./test/删除产品.png" });
    await page.mouse.click(1143, 231);
    await page.screenshot({ path: "./test/添加产品.png" });
    await page.mouse.click(1114, 231);
    await page.screenshot({ path: "./test/减少产品.png" });
  }, 800);
  await page.mouse.click(115, 127);
  await page.screenshot({ path: "./test/筛选M.png" });
  await setTimeout(async () => {
    await browser.close();
  }, 1200);
})();
