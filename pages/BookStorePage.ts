import { Locator, Page } from "@playwright/test";

export class BookStorePage{
    page: Page;
    addToYourCollectionButton: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.addToYourCollectionButton = page.getByRole('button', {name: 'Add To Your Collection'});
    }

    bookToSelected(bookName: string): Locator{
        return this.page.getByRole('link', {name: bookName});
    }

    async selectBook(bookName: string){
        await this.bookToSelected(bookName).click();
    }

    async addBookToTheCollection(){
        await this.addToYourCollectionButton.click({ force: true });
    }
}