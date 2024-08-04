import { Builder, By, WebDriver } from "selenium-webdriver";

describe("Frontend tests", () => {
  const SECONDS = 1000;

  let driver: WebDriver;
  beforeAll(async () => {
    driver = await new Builder().forBrowser('MicrosoftEdge').build();
    await driver.manage().window().maximize();
    await driver.get("https://google.com");
  }, 70 * SECONDS);
  afterAll(async () => {
    await driver.close();
  }, 70 * SECONDS);
  it(
    "Open browser",
    async () => {
      let element = await driver.findElement(
        By.xpath(
          "//div[@class='FPdoLc lJ9FBc']//input[contains(@value,'Поиск в Google')]"
        )
      );
      expect(await element.isDisplayed()).toBeTruthy();
    },
    70 * SECONDS
  );
});
