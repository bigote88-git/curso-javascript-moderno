// faker: utilidad para generar datos de pruebas desde la web
// lodash: utilidad para trabajar con colecciones de objetos 

module.exports = () => {
    var faker = require('@faker-js/faker');
    var lodash = require('lodash');

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