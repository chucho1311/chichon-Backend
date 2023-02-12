require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET,
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || 'password',
    DB_NAME: process.env.DB_NAME || 'usersdb',
    DB_PORT: process.env.DB_PORT || 3306
};
