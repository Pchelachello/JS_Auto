import { By, WebDriver } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { driver } from "../driver";
import { BASE_URL } from "../const/consts";

export class HomePage extends BasePage{
protected static instance: HomePage

    constructor(driver:WebDriver)
{
    super(driver)
this.url = BASE_URL
}
static getInstance(){
    if(!this.instance)
    {
        this.instance = new HomePage(driver)
    }
    return this.instance
}

async getTitleText(): Promise<string>{
    const element = await this.driver.findElement(By.xpath("//div[@class = 'container']//h1"))
    return await element.getText()
}

async fillInputElement(searchValue:string){
    const element = await this.driver.findElement(By.xpath("//input[@id='search-box-top']"))
    await element.sendKeys("value", searchValue)
}

async getInputValue(){
    const element = await this.driver.findElement(By.xpath("//input[@id='search-box-top']"))
    return element.getAttribute("value")
}
}