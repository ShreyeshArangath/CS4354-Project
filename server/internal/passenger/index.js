class PassengerController {
    constructor(passengerRepo, tripRepo) {
        this._passengerRepo = passengerRepo
        this._tripRepo = tripRepo
    }
}

module.exports = {PassengerInterface: PassengerController}