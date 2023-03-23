import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
    private username: string = '//div/input[@name="email"]';
    private password: string = '//div/input[@name="password"]';
    private buttonSign: string = '//form/button[@class="ud-btn ud-btn-large ud-btn-brand ud-heading-md helpers--auth-submit-button--2K2dh"]';
    constructor() {
        super()
    }
    async setUserName(user: string) {
        await this.driver.Page.fill(this.username, user)
    }
    async setPassword(pass: string) {
        await this.driver.Page.fill(this.password, pass)
    }
    async clickButton() {
        await this.driver.Page.click(this.buttonSign)
    }
}