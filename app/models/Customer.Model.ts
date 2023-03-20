import { DataTypes } from 'sequelize';
import { SequelizeConnection } from '@config/database';

export const CustomerModel = SequelizeConnection().define(
    'Customer',
    {
        customerID: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        customerName: {
            type: DataTypes.STRING
        },
        sex: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        }
    },
    { tableName: 'CustomerTB' }
);
