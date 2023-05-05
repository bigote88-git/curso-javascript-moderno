import { faker } from '@faker-js/faker';

export function returnData() {
    return {
        users: Array.from({ length: 10 }).forEach(() => {
            return {
                userId: faker.datatype.uuid(),
                username: faker.internet.userName(),
                email: faker.internet.email(),
                avatar: faker.image.avatar(),
                password: faker.internet.password(),
                birthdate: faker.date.birthdate(),
                registeredAt: faker.date.past(),
            }
        })
    };
};