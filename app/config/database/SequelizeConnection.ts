import { Sequelize } from 'sequelize';

export const SequelizeConnection = (): Sequelize => {
    const sequelize = new Sequelize('CustomerDB', 'root', 'Abc@1234', {
        host: 'localhost',
        dialect: 'mysql'
    });
    return sequelize;
};
