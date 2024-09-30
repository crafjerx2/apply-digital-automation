import { faker } from '@faker-js/faker';

export const getRandomUser = () => {
    return {
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        email: faker.internet.email(), 
        password: faker.internet.password(),
        birthdate: faker.date.birthdate({ mode: 'age', min: 18, max: 65 }),
        company: faker.company.buzzNoun(),
        address1: faker.location.direction(),
        address2: faker.location.secondaryAddress(),
        country: faker.location.country(),
        state: faker.location.state(),
        city: faker.location.city(),
        zipCode: faker.location.zipCode(),
        phone: faker.phone.number({ style: 'human'})
      };
}
