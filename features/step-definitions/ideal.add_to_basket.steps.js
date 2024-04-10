import itemDescriptionPage from "../pageobjects/ideal.item_description.page.js";
import { Given, When, Then } from "@wdio/cucumber-framework";
import addSuccessPage from "../pageobjects/ideal.add_success.page.js"
import { forAdd } from "../resources/index.js";

Given ('the user is on item description page', async () =>
{
    itemDescriptionPage.open();

    await browser.waitUntil(
        async function () {
            return (await itemDescriptionPage.cookiesButton.isDisplayed()) === true;
        }, {timeout:5000}
    );

    await itemDescriptionPage.cookiesButton.click();
});

When('user clicks on addToBasket button', async () => {
    await itemDescriptionPage.addButton.scrollIntoView();
    await itemDescriptionPage.addButton.click();
});

Then('the user is taken to success page and item counter is set to 1', async () => {
    
    await browser.waitUntil(
        async function () {
            return (await browser.getUrl()) === forAdd.addSucc;             
        }, {timeout: 5000}
    );

    await expect(browser).toHaveUrl(forAdd.addSucc);
    await expect(addSuccessPage.itmCounter).toHaveText('1');
});