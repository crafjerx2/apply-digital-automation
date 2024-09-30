import { faker } from '@faker-js/faker';

const currentYear = new Date().getFullYear();
const maxYear = currentYear + 10;

export const getRandomCreditCard = () => {
    return {
        name: faker.finance.accountName(),
        number: faker.finance.creditCardNumber(),
        cvc: faker.finance.creditCardCVV(),
        expiryMonth: faker.number.int({ min: 1, max: 12 }),
        expiryYear: faker.number.int({ min: currentYear, max: maxYear })

    }
}
