import puppeteer, { Browser, Page } from "puppeteer";
describe("Test", () => {
  let page: Page;
  let browser: Browser;
  const SECONDS = 1000;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      // slowMo: 80,
    });
    page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1024 });
  }, 70 * SECONDS);
  afterAll(async () => {
    await browser.close();
  }, 70 * SECONDS);
  it(
    "Test 1",
    async () => {
      await page.goto("https://www.google.ru/?hl=ru");
      const element = await page.waitForSelector(
        "::-p-xpath(//div[@class = 'FPdoLc lJ9FBc']//input[contains(@value,'Поиск')])"
      );
      expect(await element?.isVisible()).toBeTruthy();
    },
    70 * SECONDS
  );
});
