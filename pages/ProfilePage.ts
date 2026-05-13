import {Locator, Page} from "@playwright/test"
export class ProfilePage{
    page: Page;
    goToBookStoreButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.goToBookStoreButton = page.getByRole('button', {name: 'Go To Book Store'});
    }

    async goToBookStore(){
        await this.goToBookStoreButton.click();
    }
}