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
    "Нажатие на страницу 'Разработка'",
    async () => {
      await driver.get(BASE_URL);
      const devLink = await driver.wait(
        until.elementLocated(By.xpath(XpathLocators.devsLink)),
        timeout
      );
      await devLink.click();
      const devPage = await driver.wait(
        until.elementLocated(By.xpath(XpathLocators.development)),
        timeout
      );
      expect(devPage.isEnabled()).toBeTruthy();
      expect(await devPage.getText()).toBe("Разработка");
    },
    timeout
  );
});