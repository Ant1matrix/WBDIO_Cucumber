import { forLoginForm } from "../resources/index.js";
import Page from "./page.js";

class LoginFormPage extends Page  {
    open () {
        super.open(forLoginForm.loginURL);
    }

    get emailField () {
        return $('#email');
    }

    get passField () {
        return $('#pass');
    }

    get submitBtn () {
        return $('#send2');
    }

    get alertMsg () {
        return $('div.cart-callout.intent-danger');
    }
    
    get cookiesButton () {
        return $('button#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll');
    }
}

export default new LoginFormPage();