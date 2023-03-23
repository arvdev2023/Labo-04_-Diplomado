import { driverInstance } from "../src/core/driver";
import { LoginPage } from "../src/pages/login.page"

describe('Login from Udemy', () => {
    let loginPage: LoginPage
    beforeAll(async () => {

        await driverInstance.startDriver()
        loginPage = new LoginPage();
    })
    afterAll(async () => {

    })
    it('Go To Page', async () => {
        await loginPage.navigateTo('https://www.udemy.com/join/login-popup/?locale=es_ES&response_type=html&next=https%3A%2F%2Fwww.udemy.com%2F');
    });

    it('Sets Username', async () => {
        await loginPage.setUserName('');
    });

    it('Sets Password', async () => {
        await loginPage.setPassword('');
    });
    it('Clicks login Button', async () => {
        await loginPage.clickButton();
    });
})