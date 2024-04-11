import Page from "./page.js";
import { forAdd } from "../resources/index.js";

class BasketPage extends Page {
    open () {
        super.open(forAdd.startPage);
    }

    get iPhoneItm () {
        return $$('div.layout-cart__main tbody tr td p.cart-table-title a')[0];
    }

    get removeButton () {
        return $('p.cart-table-remove');
    }
}

export default new BasketPage();