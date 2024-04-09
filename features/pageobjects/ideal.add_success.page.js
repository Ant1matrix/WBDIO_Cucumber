import Page from "./page.js";
import { forAdd } from "../resources/index.js";

class addSuccessPage extends Page {
    open () {
        super.open(forAdd.startPage);
    }

    get itmCounter () {
        return $('#main-header  ul.userhub li.link-cart a b.products');
    }

    get succText () {
        return $('div.frame-ideal__pre-cart__message');
    }
}

export default new addSuccessPage();