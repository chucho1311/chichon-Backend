const createPool = require('mysql2/promise');

module.exports = createPool({
    user: 'test',
    password: 'zarem123',
    host: 'localhost',
    port: 8000,
    database: 'proyecto'
})

