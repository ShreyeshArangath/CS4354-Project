class AdminController {
    constructor(passengerRepo, driverRepo, tripRepo) {
        this._passengerRepo = passengerRepo
        this._driverRepo = driverRepo
        this._tripRepo = tripRepo
    }

    async cancelTrip(tripID) {
        return await this._tripRepo.cancelTrip(tripID)
    }
}

module.exports = {AdminController}