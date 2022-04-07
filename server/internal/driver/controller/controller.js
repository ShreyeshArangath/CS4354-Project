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

    async getTripById(tripId) { 
        return await this._tripRepo.getTripByID(tripId)
    }

    async acceptTrip(tripID, driverID) {
        // Algorithm: 
        // 1. Add trip to the driver-trips table 
        // 2. Change the trip state to in-progress
        const state = "IN_PROGRESS"
        const insertData = await this._tripRepo.insertIntoDriverTrips(driverID, tripID)
        const updateStateData = await this._tripRepo.updateTripState(tripID, state)
        return [insertData, updateStateData]
    }
}

module.exports = {DriverController}