import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ProfilePage} from "../pages/ProfilePage";
import { BookStorePage} from "../pages/BookStorePage";

test.describe('Book Store Tests', () => {
    const BOOK_NAME = 'Understanding ECMAScript 6';
    let homePage: HomePage;
    let loginPage: LoginPage;
    let profilePage: ProfilePage;
    let bookStorePage: BookStorePage;

    test.beforeEach('setup', async({page})=>{
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        profilePage = new ProfilePage(page);
        bookStorePage = new BookStorePage(page);
    });

    test('user is able to add a book in his collection', async()=>{
        await homePage.gotToApplication();
        await homePage.navigateToBookApplication();
        await homePage.goToLogin();
        await loginPage.userLogin();
        await profilePage.goToBookStore();
        await bookStorePage.selectBook(BOOK_NAME);
        await bookStorePage.addBookToTheCollection();
        await bookStorePage.goToProfile();
        await expect(bookStorePage.getBookNameAdded(BOOK_NAME)).toBeVisible();
    });

    test.afterEach('clean data', async() => {       
        await profilePage.deleteBookFromTheCollection();
    });
});