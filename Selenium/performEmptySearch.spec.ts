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
    "Поле поиск",
    async () => {
      await driver.get(BASE_URL);
      const searchIcon = await driver.wait(
        until.elementIsEnabled(driver.findElement(By.css(CssLocators.search))),
        timeout
      );
      await searchIcon.click();
      const searchField: any = await driver.wait(
        until.elementLocated(By.xpath(XpathLocators.searchInput))
      );
      expect(await searchField.isDisplayed()).toBeTruthy();
      await driver.actions().sendKeys(searchField, "emptysearch").perform();
      const searchActionButton: any = await driver.wait(
        until.elementLocated(By.css(CssLocators.searchButton))
      );
      await searchActionButton.click();
      const emptySearch = await driver.wait(
        until.elementLocated(By.xpath(XpathLocators.emptyPage))
      );
      expect(await emptySearch.isDisplayed()).toBeTruthy();
      expect(await emptySearch.getText()).toBe(
        "К сожалению, здесь пока нет ни одной публикации"
      );
    },
    timeout
  );
});
