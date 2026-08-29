import { Locator, Page } from "@playwright/test";

export class ProfilePage{
    page: Page;
    goToBookStoreButton: Locator;
    deleteBookButton: Locator;
    deleteBookConfirmation: Locator;

    constructor(page: Page){
        this.page = page;
        this.goToBookStoreButton = page.getByRole('button', {name: 'Go To Book Store'});
        this.deleteBookButton = page.locator('span[title="Delete"] > svg > path');
        this.deleteBookConfirmation = page.getByRole('button', { name: 'OK', exact: true });
    }

    async goToBookStore(): Promise<void>{
        await this.goToBookStoreButton.click();
    }

    async deleteBookFromTheCollection(): Promise<void>{
        await this.deleteBookButton.click();
        await this.deleteBookConfirmation.click();
    }  
}