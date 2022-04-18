class PassengerController {
    constructor(passengerRepo, driverRepo, tripRepo, paymentRepo) {
        this._driverRepo = driverRepo
        this._passengerRepo = passengerRepo
        this._tripRepo = tripRepo
        this._paymentRepo = paymentRepo
    }

    async requestTrip(passengerID, trip) {
        const lastInsertID = await this._tripRepo.insertTrip(trip)
        const insertPassengerTripData = await this._tripRepo.insertIntoPassengerTrips(passengerID, lastInsertID)
        return [lastInsertID, insertPassengerTripData]
    }

    async getDriverInfo(tripId) {
        const [rows, getDriverIDMetadata] = await this._tripRepo.getDriverIDFromTrip(tripId) 
        const driverId = rows[0].driverID
        const [driverData, getDriverDetailsMetadata] = await this._driverRepo.getDriver(driverId)
        
        return driverData
    }

    async rateTrip(tripID, rating) {
        return await this._tripRepo.updatePassengerRatingForTripID(tripID, rating)
    }

    async getRating(userID) {
        return await this._tripRepo.getPassengerRating(userID)
    }
}

module.exports = {PassengerController}