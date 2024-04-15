import { Given, When, Then } from "@wdio/cucumber-framework";
import LandingPage from "../pageobjects/ideal.landing.page.js";
import { forLoginForm } from "../resources/index.js";

Given('the user is on landing page', async () => {
    LandingPage.open();

    await browser.waitUntil(
        async function () {
            return (await LandingPage.cookiesButton.isDisplayed()) === true;
        }, {timeout:5000}
    );

    await LandingPage.cookiesButton.click();
});

When('user clicks on MyAccount button', async () => {
    await LandingPage.myaccButton.click();
});

When('clicks on Login button', async () => {
    await LandingPage.loginButton.click();
});

Then('user is navigated to login page', async () => {
    await expect(browser).toHaveUrl(forLoginForm.loginURL);
});