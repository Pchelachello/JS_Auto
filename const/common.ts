export const BASE_URL = "https://habr.com/";
export const LOGIN_URL = "https://account.habr.com/login/";
export const XpathLocators = {
  myFeed: "//h1[contains(text(), 'Моя лента')]",
  devsLink: "//a[contains(text(),'Разработка')]",
  development: "//h1[contains(text(), 'Разработка')]",
  allHabrServices: "//*[starts-with(text(), 'Все сервисы Хабра')]",
  searchInput:"//input[@class='tm-search__input tm-input-text-decorated__input']",
  emptyPage: "//div[@data-test-id='empty-placeholder-text']",
};
export const CssLocators = {
  menu: "svg.tm-svg-img.tm-header__icon.tm-header__icon_dropdown",
  search: "svg.tm-svg-img.tm-header-user-menu__icon.tm-header-user-menu__icon_search.tm-header-user-menu__icon_dark",
  searchButton: "svg.tm-svg-img.tm-svg-icon",
};
export const timeout = 160000;

export const titleHomePageText =
  "TypeScript is JavaScript with syntax for types.";
export const searchValue = "test";
export enum PAGES {
  HOME,
}
