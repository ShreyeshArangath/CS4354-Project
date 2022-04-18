class AdminController {
    constructor(passengerRepo, driverRepo, tripRepo) {
        this._passengerRepo = passengerRepo
        this._driverRepo = driverRepo
        this._tripRepo = tripRepo
    }

    async cancelTrip(tripID) {
        return await this._tripRepo.cancelTrip(tripID)
    }

    async getTripInfoByState(state){
        state = state.toUpperCase()
        return await this._tripRepo.retrieveTripsByState(state)
    }

    async getAllDrivers(){
        return await this._driverRepo.getDrivers()
    }
    
    async getDriver(userID) {
        return await this._driverRepo.getDriver(userID)
    }

    async getAllPassengers() {
        return await this._passengerRepo.getPassengers()
    }

    async getPassenger(userID){
        return await this._passengerRepo.getPassenger(userID)
    }

    async deleteDriver(userID){
        return await this._driverRepo.deleteDriver(userID)
    }

    async deletePassenger(userID) {
        return await this._passengerRepo.deletePassenger(userID)
    }
}

module.exports = {AdminController}