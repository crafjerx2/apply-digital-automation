
class Navbar  {
    constructor() {
        this.productLink = '[href="/products"';
        this.cartLink = 'li > a[href="/view_cart"]';
        this.signupAndLoginLink = 'li > a[href="/login"]';
        this.logoutLink = 'li > a[href="/logout"]';
    }

    clickProduct() {
        cy.get(this.productLink).click();
    }

    clickCart() {
        cy.get(this.cartLink).click();
    }

    clickSignupAndLogin() {
        cy.get(this.signupAndLoginLink).click();
    }
}

export const navbar = new Navbar();
