const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'dev',
    database: 'nodejs',
    password: 'Password@12345'
});

module.exports = pool.promise();