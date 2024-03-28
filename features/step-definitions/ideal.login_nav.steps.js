import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPageNav from "../pageobjects/ideal_login.nav.page.js";
import { forLoginForm } from "../resources/index.js";

Given('the user is on landing page', () => {
    LoginPageNav.open();
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