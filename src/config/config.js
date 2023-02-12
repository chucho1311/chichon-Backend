const { DB_HOST } = require('../config');
const config = require('../config');

module.exports = {
    development: {
        username: 'test',
        password: 'zarem123',
        database: 'proyecto',
        host: '127.0.0.1',
        dialect: 'postgres',
    },
    test: {
        username: 'test',
        password: 'zarem123',
        database: 'proyecto',
        host: '127.0.0.1',
        dialect: 'postgres',
    },
    production: {
        username: config.DB_USER,
        password: config.DB_PASSWORD,
        database: config.DB_NAME,
        host: config.DB_HOST,
        dialect: 'postgres',
        url: config.url
    }
    // production: {
    //     url: config.db.production.url,
    //     use_env_variable: config.db.production.url,
    //     dialect: 'postgres',
    //     protocol: 'postgres',
    //     ssl: true,
    //     dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
    // }
};

