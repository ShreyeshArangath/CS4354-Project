class DriverController {
    constructor(driverRepo, tripRepo) {
        this._driverRepo = driverRepo
        this._tripRepo = tripRepo
    }
}

module.exports = {DriverController}