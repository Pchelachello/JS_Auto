import { titleHomePageText, timeout, searchValue, PAGES } from "../const/common";
import { PageFactory } from "../pages/pageFactory";

const homePage = PageFactory.getPage(PAGES.HOME)

describe("Home page test", () => {
  afterAll(async () => {
    await homePage.closePage();
  }, timeout);

  it(
    "Checkout title text",
    async () => {
      await homePage.viewPage();
      const titleText = await homePage.getTitleText();
      expect(titleText).toContain(titleHomePageText);
    },
    timeout
  );

  it(
    "Fill input element",
    async () => {
      await homePage.fillInputElement(searchValue);
      const inpupValue = await homePage.getInputValue();
      expect(inpupValue).toEqual(searchValue);
    },
    timeout
  );
});
