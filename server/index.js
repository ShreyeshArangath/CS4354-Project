//External Dependencies 
require('dotenv').config()
const express = require("express")
const mysql = require('mysql'); // MySQL dependency injection 
const cors = require('cors')
const bodyParser = require('body-parser');

// Internal Dependencies 
const { DBHelper } = require('./shared/DB');
const {PORT} = require("./config/dev");

// Dependency Injection 
const dbHelper = new DBHelper(
    mysql, 
    process.env.MYSQL_HOST, 
    process.env.MYSQL_USER, 
    process.env.MYSQL_PASSWORD, 
    process.env.MYSQL_DATABASE
    )

// App Config  
const app = express()
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

// Server Config 
app.listen(9000, () => {
    console.log("Running the backend server on port 9000");
    dbHelper.establishConnection();
})