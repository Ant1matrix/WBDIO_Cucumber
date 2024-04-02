import Page from "./page.js";
import { forLoginNav } from "../resources/index.js";

class LoginPageNav extends Page {
    open () {
        super.open(forLoginNav.iDealMainPage);
    }

    get myaccButton (){
        return $$('li.link-account span.bp3-popover-target a span.label')[0];
    }

    get loginButton (){
        return $$('a.menu-item.bp3-menu-item.bp3-popover-dismiss.intent-default')[0];
    }

    get cookiesButton () {
        return $('button#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll');
    }
}

export default new LoginPageNav();