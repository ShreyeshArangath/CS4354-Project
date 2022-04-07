class PassengerController {
    constructor(passengerRepo, tripRepo, paymentRepo) {
        this._passengerRepo = passengerRepo
        this._tripRepo = tripRepo
        this._paymentRepo = paymentRepo
    }

    async requestTrip(passengerID, trip) {
        const lastInsertID = await this._tripRepo.insertTrip(trip)
        const insertPassengerTripData = await this._tripRepo.insertIntoPassengerTrips(passengerID, lastInsertID)
        return [lastInsertID, insertPassengerTripData]
    }
}

module.exports = {PassengerController}