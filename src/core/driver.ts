import { Browser, BrowserContext, Page, chromium } from "playwright";

export class Driver {
    private page!: Page;
    private browser!: Browser;
    private context!: BrowserContext;
    constructor() {
    }
    async startDriver() {
        this.browser = await chromium.launch(
            {
                headless: false
            }
        );
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }
    get Page(): Page {
        return this.page;
    }
}
export const driverInstance=new Driver()