import Page from "./page.js";
import { forLoginNav } from "../resources/index.js";

class LandingPage extends Page {
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

    get searchButton () {
        return $('#main-header ul.userhub li.link-search a');
    }
    
    get searchInput () {
        return $('div.search-desktop label input[name="q"]');
    }
}

export default new LandingPage();