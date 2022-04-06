const express = require('express');
const router = express.Router();

class DriverController {
    constructor(driverRepo, tripRepo, paymentRepo) {
        this._driverRepo = driverRepo
        this._tripRepo = tripRepo
        this._paymentRepo = paymentRepo
    }

    // Returns (data, err)
    async getDriver(userID) {
        return await this._driverRepo.getDriver(userID)
    }

    async getTrips(state = "IN_QUEUE", page = 1, listPerPage = 10) {
        return await this._tripRepo.retrieveTripsByState(state, page, listPerPage)
    }
}

module.exports = {DriverController}