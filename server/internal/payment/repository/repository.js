class PaymentRepository {
    constructor(database){
        this._database = database
    }

    insertPayment(transactionId, tripId, paymentMethod) {
        // Insert into the Payment table 
    }

    retrieveTransaction(tripId) {
        // Retrieve both the transaction
    }
}

module.exports = {PaymentRepository}