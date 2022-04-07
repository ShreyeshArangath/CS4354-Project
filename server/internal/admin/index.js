class AdminController {
    constructor(passengerRepo, driverRepo, tripRepo) {
        this._passengerRepo = passengerRepo
        this._driverRepo = driverRepo
        this._tripRepo = tripRepo
    }
}

module.exports = {AdminController}