import { driverInstance } from "../src/core/driver";
import { LoginPage } from "../src/pages/login.page"

describe.skip('Login from TestingShop', () => {
    let loginPage: LoginPage
    beforeAll(async () => {

        await driverInstance.startDriver()
        loginPage = new LoginPage();
    })
    afterAll(async () => {

    })
    it('Go To Page', async () => {
        await loginPage.navigateTo('https://thetestingworld.com/shop/index.php?route=account/login');
    });

    it('Sets Username', async () => {
        await loginPage.setUserName('arvd20197@gmail.com');
    });

    it('Sets Password', async () => {
        await loginPage.setPassword('Testing2023');
    });
    it('Clicks login Button', async () => {
        await loginPage.clickButton();
    });
})