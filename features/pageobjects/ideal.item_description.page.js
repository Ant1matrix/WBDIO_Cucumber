import Page from "./page.js";
import { forAdd } from "../resources/index.js";

class itemDescriptionPage extends Page {
    open () {
        super.open(forAdd.startPage);
    }

    get productLabel () {
        return $('div.frame-ideal__body h1');
    }

    get addButton () {
        return $('div.product-pricing.type02 button');
    }

    get cookiesButton () {
        return $('button#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll');
    }
}

export default new itemDescriptionPage();