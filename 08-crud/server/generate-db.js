// faker: utilidad para generar datos de pruebas desde la web
// lodash: utilidad para trabajar con colecciones de objetos 
import { faker } from '@faker-js/faker';
import { lodash } from 'lodash';

export default () => {
    return {
        users: lodash.times(50, (index) => {
            return {
                id: index,
                isActive: true,
                balance: faker.commerce.price(100, 200),
                avatar: faker.image.avatar(),
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                gender: faker.name.sexType()
            }
        })
    };
};