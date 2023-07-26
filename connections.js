const mysql2 = require('mysql2');

const MySqlconnection = mysql2.createConnection(
    {
        host: 'localhost',
        user: 'root',
        // password: '',
        database: 'emp_DB'
    },
);

module.exports = MySqlconnection;