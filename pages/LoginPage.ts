import { Locator, Page } from "@playwright/test";

export class LoginPage{
    page: Page;
    userName: Locator;
    password: Locator;
    loginButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.userName = page.locator('#userName');
        this.password = page.locator('#password');
        this.loginButton = page.locator('button[id="login"]');
    }

    async userLogin(): Promise<void> {
        await this.userName.fill(process.env.APP_USERNAME);
        await this.password.fill(process.env.APP_PASSWORD);
        await this.loginButton.click();
    }
}