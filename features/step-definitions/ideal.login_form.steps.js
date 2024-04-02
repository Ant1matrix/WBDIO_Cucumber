import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginFormPage from "../pageobjects/ideal.login_form.page.js";
import { forLoginForm } from "../resources/index.js";

Given('the user is on login form page', async () =>{
    LoginFormPage.open();

    await browser.waitUntil(
        async function () {
            return (await LoginFormPage.cookiesButton.isDisplayed()) === true;
        }, {timeout:5000}
    );

    await LoginFormPage.cookiesButton.click();
});

When(/^user inputs their username and password$/, async () => {
	await LoginFormPage.emailField.addValue(forLoginForm.userLogin);
    await LoginFormPage.passField.addValue(forLoginForm.userPass);
});

When('clicks on submit button', async () => {
    await LoginFormPage.submitBtn.click();
});

Then('a warning message pops up', async () => {
    await expect(LoginFormPage.alertMsg).toBeDisplayed();
    await expect(LoginFormPage.alertMsg).toHaveText(forLoginForm.warnMsg);
});