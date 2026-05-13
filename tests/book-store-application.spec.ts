import {test} from "@playwright/test";
import {HomePage} from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ProfilePage} from "../pages/ProfilePage";
import { BookStorePage} from "../pages/BookStorePage";

test.describe('Book Store Tests', () => {
    test("user is able to add a book in his collection",async({page})=>{
        const BOOK_NAME = 'Understanding ECMAScript';
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        const profilePage = new ProfilePage(page);
        const bookStorePage = new BookStorePage(page);
        await homePage.gotToApplication();
        await homePage.navigateToBookApplication();
        await homePage.goToLogin();
        await loginPage.userLogin();
        await profilePage.goToBookStore();
        await bookStorePage.selectBook(BOOK_NAME);
        await bookStorePage.addBookToTheCollection();
    });
});