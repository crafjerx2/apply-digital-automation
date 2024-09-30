
class CheckoutModal {

    constructor(){
        this.checkoutModalId = '#checkoutModal';
    }

    checkoutModalIsPresent() {
        cy.get(this.checkoutModalId).should('have.class', 'show')
        return this;
    }

    checkoutTextIsPresent() {
        cy.get(this.checkoutModalId)
        .find('.modal-body > p')
        .eq(0)
        .should('have.text', 'Register / Login account to proceed on checkout.');
        return this;
    }

    clickRegisterAndLogin() {
        cy.get(this.checkoutModalId).find('.modal-body a').click();
        return this; 
    }
}

export const checkoutModal = new CheckoutModal();
