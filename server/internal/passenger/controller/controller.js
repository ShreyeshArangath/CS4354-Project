class PassengerController {
    constructor(passengerRepo, tripRepo, paymentRepo) {
        this._passengerRepo = passengerRepo
        this._tripRepo = tripRepo
        this._paymentRepo = paymentRepo
    }

    async requestTrip(passengerID, trip) {
        // Algorithm: 
        // 1. Add trip to the trip table 
        // 2. Get the trip ID
        // 3. Add trip to the passenger-trips table 
        const lastInsertID = await this._tripRepo.insertTrip(trip)
        const insertPassengerTripData = await this._tripRepo.insertIntoPassengerTrips(passengerID, lastInsertID)
        console.log("lastInsertId: ", lastInsertID)
        return [lastInsertID, insertPassengerTripData]
    }
}

module.exports = {PassengerController}