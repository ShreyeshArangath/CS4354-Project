//External Dependencies 
require('dotenv').config()
const express = require("express")
const mysql = require('mysql2/promise'); // MySQL dependency injection 
const cors = require('cors')
const bodyParser = require('body-parser');

// Internal Dependencies 
const { DBHelper } = require('./shared/DB');
const {Pagination} = require('./shared/pagination')
const {PORT} = require("./config/dev");

// Controllers 
const { DriverController } = require('./internal/driver/controller/controller');
const { PassengerController } = require('./internal/passenger/controller/controller');
// const { AdminController } = require('./internal/admin/controller/controller');

// Repositories 
const { DriverRepository } = require('./internal/driver/repository/repository');
const { PassengerRepository } = require('./internal/passenger/repository/repository');
const { TripRepository } = require('./internal/trip/repository/repository');
const { PaymentRepository } = require('./internal/payment/repository/repository');
const { getDriverRouter } = require('./internal/driver');
const { getPassengerRouter } = require('./internal/passenger');


// App Config  
const config = {
    "host":  process.env.MYSQL_HOST, 
    "user": process.env.MYSQL_USER, 
    "password": process.env.MYSQL_PASSWORD, 
    "database":  process.env.MYSQL_DATABASE, 
}
// App Config 
const app = express()
const router = express.Router();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

// Depedencies 
const dbHelper = new DBHelper(mysql, config, new Pagination())
connection = dbHelper.createConnection()
const driverRepo = new DriverRepository(dbHelper)
const passengerRepo = new PassengerRepository(dbHelper)
const tripRepo = new TripRepository(dbHelper)
const paymentRepo = new PaymentRepository(dbHelper)

const driver = new DriverController(driverRepo, tripRepo, paymentRepo)
const passenger = new PassengerController(passengerRepo, tripRepo, paymentRepo)

// Routes 
app.use('/api/driver',getDriverRouter(driver))
app.use('/api/passenger', getPassengerRouter(passenger))


// Server Config 
app.listen(9000, () => {
    console.log("Running the backend server on port 9000");
})