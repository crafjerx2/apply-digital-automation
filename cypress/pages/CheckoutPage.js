

class CheckoutPage {

    constructor() {
        this.checkoutButton = '.check_out';
    }

    clickPlaceOrder() {
        cy.get(this.checkoutButton).click();
        return this;
    }

}

export const checkoutPage = new CheckoutPage();
