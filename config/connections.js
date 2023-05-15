//mysql import
const mysql = require('mysql2');

//load in the env file
require('dotenv').config();

//using env connections
const connect = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'emp_db'
    });

    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to database: ', err);
            return;
        }
    console.log('\nConnected to employee tracking database.');

});

//export the connect const
module.exports = connect;