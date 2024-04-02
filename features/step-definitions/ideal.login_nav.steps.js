import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPageNav from "../pageobjects/ideal_login.nav.page.js";
import { forLoginForm } from "../resources/index.js";

Given('the user is on landing page', async () => {
    LoginPageNav.open();

    await browser.waitUntil(
        async function () {
            return (await LoginPageNav.cookiesButton.isDisplayed()) === true;
        }, {timeout:5000}
    );

    await LoginPageNav.cookiesButton.click();
});

When('user clicks on MyAccount button', async () => {
    await LoginPageNav.myaccButton.click();
});

When('clicks on Login button', async () => {
    await LoginPageNav.loginButton.click();
});

Then('user is navigated to login page', async () => {
    await expect(browser).toHaveUrl(forLoginForm.loginURL);
});