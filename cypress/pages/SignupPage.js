
class SignupPage {

    constructor() {
        this.user;
        this.id_gender1 = '#id_gender1';
        this.passwordInput = '[data-qa="password"]';
        this.dateOfBirth_days = '[data-qa="days"]'; 
        this.dateOfBirth_months = '[data-qa="months"]';
        this.dateOfBirth_years = '[data-qa="years"]';
        this.first_nameInput = '[data-qa="first_name"]';
        this.last_nameInput = '[data-qa="last_name"]';
        this.companyInput = '[data-qa="company"]';
        this.address1Input = '[data-qa="address"]';
        this.address2Input = '[data-qa="address2"]';
        this.countryInput = '[data-qa="country"]';
        this.stateInput = '[data-qa="state"]';
        this.cityInput = '[data-qa="city"]';       
        this.zipcodeInput = '[data-qa="zipcode"]';
        this.phoneInput = '[data-qa="mobile_number"]';
        this.createAccountButton = '[data-qa="create-account"]';
        this.continueButton = '[data-qa="continue-button"]';
    }

    fillForm(user) {
        const 
        { password, firstname, lastname, company, address1, address2, state, city, country, zipCode, phone } 
        = user;

        cy.get(this.id_gender1).check();
        cy.setValue(this.passwordInput, password);
        cy.setValue(this.first_nameInput, firstname);
        cy.setValue(this.last_nameInput, lastname);
        cy.setValue(this.companyInput, company);
        cy.setValue(this.address1Input, address1);
        cy.setValue(this.address2Input, address2);
        // Country
        cy.setValue(this.stateInput, state);
        cy.setValue(this.cityInput, city);
        cy.setValue(this.zipcodeInput, zipCode);
        cy.setValue(this.phoneInput, phone);

        cy.get(this.createAccountButton).click();
        cy.get(this.continueButton).click();
    }
    
 
}

export const signupPage = new SignupPage();
