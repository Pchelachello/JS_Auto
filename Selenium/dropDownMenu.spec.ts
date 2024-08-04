import { Builder, By, until, WebDriver } from "selenium-webdriver";
import { BASE_URL, CssLocators, XpathLocators, timeout } from "../const/common";

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
    'Поиск элемента "Все сервисы Хабра" из дроп-дауна Меню',
    async () => {
      await driver.get(BASE_URL);
      const dropDownMenu = await driver.wait(
        until.elementIsEnabled(driver.findElement(By.css(CssLocators.menu))),
        timeout
      );
      await dropDownMenu.click();
      const allServices = await driver.findElement(
        By.xpath(XpathLocators.allHabrServices)
      );
      expect(await allServices.isDisplayed()).toBeTruthy();
      expect(await allServices.getText()).toBe("Все сервисы Хабра");
    },
    timeout
  );
});