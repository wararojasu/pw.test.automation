import { Locator, Page } from "@playwright/test";

export class HomePage{
    page: Page;
    bookApplication: Locator;
    loginButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.bookApplication = page.locator('//h5[contains(text(),"Book Store Application")]');
        this.loginButton = page.locator('button[id="login"]');
    }

    async gotToApplication(): Promise<void> {
        await this.page.goto('/');
    }

    async navigateToBookApplication(): Promise<void> {
        await this.bookApplication.click();
    }

    async goToLogin(): Promise<void> {
        await this.loginButton.click();
    }
}