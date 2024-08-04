import { Builder, By, until, WebDriver } from "selenium-webdriver";
import { BASE_URL, XpathLocators, timeout } from "../const/common";

describe("Habr tests", () => {
  let driver: WebDriver;
  beforeAll(async () => {
    driver = await new Builder().forBrowser("MicrosoftEdge").build();
    await driver.manage().window().maximize();
  });
  afterAll(async () => {
    await driver.quit();
  });
  it(
    "Найти раздел 'Моя лента' на странице",
    async () => {
      await driver.get(BASE_URL);
      const element = await driver.wait(
        until.elementLocated(By.xpath(XpathLocators.myFeed)),
        timeout
      );
      expect(await element.isEnabled()).toBeTruthy();
      expect(await element.getText()).toBe("Моя лента");
    },
    timeout
  );
});