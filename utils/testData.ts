import { faker } from '@faker-js/faker';

export const generateUserData = () => ({
  name: faker.person.fullName(),
  email: faker.internet.email(),
  password: faker.internet.password({ length: 10, memorable: true }),
  phone: faker.phone.number('##########'),
  address: faker.location.streetAddress(),
  city: faker.location.city(),
  zipCode: faker.location.zipCode(),
  country: 'United States',
});

export const generateProductSearchTerm = (): string => {
  const terms = ['top', 'dress', 'jeans', 'shirt', 'saree', 'kurta'];
  return faker.helpers.arrayElement(terms);
};

export const invalidCredentials = {
  email: 'invalid@notexist.com',
  password: 'WrongPass999',
};