import { Locator, Page } from "@playwright/test";

export class BookStorePage{
    page: Page;
    addToYourCollectionButton: Locator;
    profile: Locator;
    bookNameLink: (bookName: string) => Locator;
    bookNameAdded: (bookName: string) => Locator;
    
    constructor(page: Page){
        this.page = page;
        this.addToYourCollectionButton = page.getByRole('button', {name: 'Add To Your Collection'});
        this.bookNameLink = (bookName: string) => page.getByRole('link', {name: bookName});
        this.profile = page.getByText('Profile');
        this.bookNameAdded = (bookName: string) => page.locator(`//a[contains(text(), "${bookName}")]`);
    }

    bookToSelected(bookName: string): Locator{
        return this.bookNameLink(bookName);
    }

    getBookNameAdded(bookName: string): Locator {
        return this.bookNameAdded(bookName);
    }
    
    async selectBook(bookName: string): Promise<void> {
        await this.bookToSelected(bookName).click();
    }

    async addBookToTheCollection(): Promise<void>{
        await this.addToYourCollectionButton.click({ force: true });
    }
    
    async goToProfile(): Promise<void>{
        await this.profile.click();
    }  
}