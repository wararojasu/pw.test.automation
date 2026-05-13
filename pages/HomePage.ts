import { Locator, Page } from "@playwright/test";
import { config } from '../config/config'

//const env = process.env.TEST_ENV || 'dev'
//const settings = config[env as keyof typeof config]


import { env } from '../config/environments'


export class HomePage{
    page: Page;
    bookApplication: Locator;
    loginButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.bookApplication = page.locator('//h5[contains(text(),"Book Store Application")]');
        this.loginButton = page.locator('button[id="login"]');
    }

    async gotToApplication(){
        await this.page.goto('/');
    }

    async navigateToBookApplication(){
        await this.bookApplication.click();
    }

    async goToLogin(){
        await this.loginButton.click();
    }
}