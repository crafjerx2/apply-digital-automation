
import './commands';
import 'cypress-mochawesome-reporter/register';
import { signupAndLoginPage } from '../pages';

Cypress.Commands.add('authenticate', (email, password) => { 
    signupAndLoginPage
        .typeLoginEmail(email)
        .typeLoginPassword(password)
        .clickLoginButton();
 });

 Cypress.Commands.add('newUserSignup', (name, email) => { 
    signupAndLoginPage
        .typeSignupName(name)
        .typeSignupEmail(email)
        .clickSignupButton();
 });

 Cypress.Commands.add('setValue', (selector, value) => {
    cy.log(value);
    cy.get(selector).invoke('val', value).trigger('input');
  });