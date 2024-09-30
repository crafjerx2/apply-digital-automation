

class PaymentPage {

    constructor() {
        this.cardNameInput = '[data-qa="name-on-card"]';
        this.cardNumberInput = '[data-qa="card-number"]';
        this.cardCVCInput = '[data-qa="cvc"]';
        this.cardExpiryMonthInput = '[data-qa="expiry-month"]';
        this.cardExpiryYearInput = '[data-qa="expiry-year"]';
        this.payButton = '[data-qa="pay-button"]';
    }


    proceedPayment(creditCard) {
        const { name, number, cvc, expiryMonth, expiryYear } = creditCard;

        cy.setValue(this.cardNameInput, name);
        cy.setValue(this.cardNumberInput, number);
        cy.setValue(this.cardCVCInput, cvc);
        cy.setValue(this.cardExpiryMonthInput, expiryMonth);
        cy.setValue(this.cardExpiryYearInput, expiryYear);

        cy.get(this.payButton).click();

        return this;
    }

    IsPaymentSuccess() {
        cy.get('[data-qa="order-placed"] > b').should('have.text', 'Order Placed!');
        cy.get('.col-sm-9 > p').should('have.text', 'Congratulations! Your order has been confirmed!');

        return this;
    }


}

export const paymentPage = new PaymentPage();
