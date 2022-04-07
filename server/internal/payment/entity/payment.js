class Payment {
    constructor(transactionID, tripID, paymentMethod){
        this.transactionID = transactionID
        this.tripID = tripID
        this.paymentMethod = paymentMethod
    }
}

class PaymentMethod {
    constructor(userId, method){
        this.userId = userId
        this.method = method
    }
}

module.exports = {Payment, PaymentMethod}