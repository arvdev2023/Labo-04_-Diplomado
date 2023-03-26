import { driverInstance } from "../src/core/driver";
import { LoginPage } from "../src/pages/login.page";
import { shoppingPage } from "../src/pages/shopping.page";

import { configPage } from "../userData";


describe("Test carrito compra", () => {
    let loginPage: LoginPage;

    beforeAll(async () => {
        await driverInstance.startDriver()
        loginPage = new LoginPage()

        await loginPage.navigateTo(configPage.linkPage)
        await loginPage.setUserName(configPage.userName)
        await loginPage.clickButton()

    }, 30000)
    afterAll(async () => {
        await driverInstance.closeDriver()
    })
    it('Go to the page shopping', async () => {
        await loginPage.clickHome()
    }, 20000)
    it('Add item 43 to the chart', async () => {
        await shoppingPage.selectItem(43)
    }, 10000)
    it('Add item 40 to the chart', async () => {
        await shoppingPage.selectItem(40)
    }, 10000)
    it('Add item 42 to the chart', async () => {
        await shoppingPage.selectItem(42)
    }, 10000)
    it('Click on button cart ', async () => {
        await shoppingPage.clickButtonCart()
    }, 20000)
    it('Click on button table', async () => {
        await shoppingPage.clickButtonTableCart()
    }, 2000)
})