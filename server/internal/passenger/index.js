class PassengerController {
    constructor(passengerRepo, tripRepo, paymentRepo) {
        this._passengerRepo = passengerRepo
        this._tripRepo = tripRepo
        this._paymentRepo = paymentRepo
    }
}

module.exports = {PassengerController}