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

When(/^user inputs their (.*) and (.*)$/, async (username, password) => {
	await LoginFormPage.emailField.addValue(username);
    await LoginFormPage.passField.addValue(password);
}); //.* is a <regular expression>

When('clicks on submit button', async () => {
    await LoginFormPage.submitBtn.click();
});

Then(/^a (.*) message pops up$/, async (message) => {
	await expect(LoginFormPage.alertMsg).toBeDisplayed();
    await expect(LoginFormPage.alertMsg).toHaveText(message);
});
