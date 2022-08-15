const mariadb = require("mariadb");
require("dotenv").config();

const pool = mariadb.createPool({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWD,
    connectionLimit: 5,
    timezone: 'Asia/Bangkok'
});


module.exports = pool;