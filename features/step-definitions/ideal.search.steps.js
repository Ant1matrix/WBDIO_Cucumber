import { Given, When, Then } from "@wdio/cucumber-framework";
import LandingPage from "../pageobjects/ideal.landing.page.js";
import { Key } from 'webdriverio';
import { forSearch } from "../resources/index.js";
import CataloguePage from "../pageobjects/ideal.catalogue.page.js";

Given('the user is on iDeal landing page', async () => {
  
  LandingPage.open();

    await browser.waitUntil(
        async function () {
            return (await LandingPage.cookiesButton.isDisplayed()) === true;
        }, {timeout:5000}
    );

    await LandingPage.cookiesButton.click();

});

When('the user clicks on search icon', async () => {
  await LandingPage.searchButton.click();
});

When('the user types iPhone 15 Pro in search field', async () => {
  await LandingPage.searchInput.addValue('iPhone 15 Pro')
});

When('clicks on Enter key', async () => {
  await browser.keys(Key.Enter);
});

Then('user is taken to catalogue page with relevant product', async () => {
  await expect(browser).toHaveUrl(forSearch.catalogueUrliPhone15Pro);
  await expect(CataloguePage.iPhone15ProProductLink).toBeDisplayed();
});