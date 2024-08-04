import { Builder, By, WebDriver } from "selenium-webdriver";
import { BASE_URL, LOGIN_URL, timeout } from "../const/common";

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
    'Проверка кнопка "Войти" открывает страницу логина',
    async () => {
      await driver.get(BASE_URL);
      const loginButton = await driver.findElement(By.linkText("Войти"));
      expect(await loginButton.isDisplayed()).toBeTruthy();
      expect(await loginButton.getText()).toBe("Войти");
      await loginButton.click();
      const currentUrl = await driver.getCurrentUrl();
      expect(currentUrl).toContain(LOGIN_URL);
    },
    timeout
  );
});