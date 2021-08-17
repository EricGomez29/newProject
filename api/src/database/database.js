require('dotenv').config();
import Sequelize from 'sequelize';

const { DB_HOST, DB_USER, DB_PASS } = process.env;

export const sequelize = new Sequelize(
    'postgres',
    `${DB_USER}`,
    `${DB_PASS}`,
    {
        host: `${DB_HOST}`,
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
)