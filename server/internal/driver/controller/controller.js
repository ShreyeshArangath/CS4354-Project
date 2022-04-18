const express = require('express');
const router = express.Router();

class DriverController {
    constructor(driverRepo, tripRepo, paymentRepo) {
        this._driverRepo = driverRepo
        this._tripRepo = tripRepo
        this._paymentRepo = paymentRepo
    }

    async getDriver(userID) {
        return await this._driverRepo.getDriver(userID)
    }

    async getDrivers() {
        return await this._driverRepo.getDrivers()
    }

    async getTrips(state = "IN_QUEUE", page = 1, listPerPage = 10) {
        return await this._tripRepo.retrieveTripsByState(state, page, listPerPage)
    }

    async getTripById(tripId) { 
        const res = await this._tripRepo.getTripStateFromID(tripId)
        const state = res[0].state

        return await this._tripRepo.retrieveTripsByState(state)
    }

    async acceptTrip(tripID, driverID) {
        const state = "IN_PROGRESS"
        const insertData = await this._tripRepo.insertIntoDriverTrips(driverID, tripID)
        const updateStateData = await this._tripRepo.updateTripState(tripID, state)
        return [insertData, updateStateData]
    }

    async completeTrip(tripId) {
        const state = "COMPLETED"
        return this._tripRepo.updateTripState(tripId, state)
    }

    async getDriverPaymentAmount(tripID) { 
        const DRIVER_CUT_PERCENTAGE = 80;
        const data = await this._paymentRepo.retrieveTripPrice(tripID)
        const driverPaymentAmount = data[0]["PRICE"]
        return driverPaymentAmount*DRIVER_CUT_PERCENTAGE/100
    }

    async rateTrip(tripID, rating) {
        return await this._tripRepo.updateDriverRatingForTripID(tripID, rating)
    }

    async getRating(userID) {
        return await this._tripRepo.getDriverRating(userID)
    }
}

module.exports = {DriverController}