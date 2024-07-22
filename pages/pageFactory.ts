import { PAGES } from "../const/common";
import { driver } from "../driver";
import { HomePage } from "./homePage";

export class PageFactory {
  constructor() {}
  static getPage(pageName: PAGES) {
    switch (pageName) {
      case PAGES.HOME:
        return new HomePage(driver)
    }
  }
}
