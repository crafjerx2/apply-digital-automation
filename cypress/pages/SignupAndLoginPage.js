
class SignupAndLoginPage  {

    constructor() {
        this.loginEmailInput        = '[data-qa="login-email____"]';
        this.loginPasswordInput     = '[data-qa="login-password"]';
        this.loginButton            = '[data-qa="login-button"]';
        this.signupName             = '[data-qa="signup-name"]';
        this.signupEmail            = '[data-qa="signup-email"]';
        this.signupButton           = '[data-qa="signup-button"]';
    }

    typeLoginEmail(email = '') {
        cy.setValue(this.loginEmailInput, email);
        return this;
    }

    typeLoginPassword(password = '') {
        cy.setValue(this.loginPasswordInput, password);
        return this;
    }

    clickLoginButton() {
        cy.get(this.loginButton).click();
        return this;
    }

    typeSignupName(name = '') {
        cy.setValue(this.signupName, name);
        return this;
    }

    typeSignupEmail(email = '') {
        cy.setValue(this.signupEmail, email);
        return this;
    }

    clickSignupButton() {
        cy.get(this.signupButton).click();
        return this;
    }
}

export const signupAndLoginPage = new SignupAndLoginPage();
