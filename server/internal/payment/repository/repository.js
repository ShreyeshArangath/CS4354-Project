class PaymentRepository {
    constructor(database){
        this._database = database
    }

    async insertPayment(tripId, paymentMethod) {
        // Insert into the Payment table 
        const sql = "INSERT INTO `PAYMENTS` (tripID, transactionID) VALUES (?, ?);"
        const params = [tripId, paymentMethod]
        const rows = await this._database.query(sql, params)
        const lastInsertID  = rows.insertId
        return lastInsertID
    }

    async retrieveTripPrice(tripId) {
        // Retrieve both the transaction
        const sql = "SELECT PRICE FROM TRIP t, PAYMENT p WHERE t.tripID = p.tripID AND p.tripID=?;"
        const params = [tripId]
        const rows = await this._database.query(sql, params)
        const data = this._database.pagination.emptyOrRows(rows)
        return data 
    }

}

module.exports = {PaymentRepository}