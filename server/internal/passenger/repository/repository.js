class PassengerRepository {
    constructor(database) {
        this._database = database
    }
 
    async getPassengers() {
        const sql = 'SELECT * FROM `passenger`;'
        const params = []
        const metadata = await this._database.query(sql, params)
        const data = this._database.pagination.emptyOrRows(metadata)
        return [data, metadata] 
    }

    async getPassenger(userID) {
        // GET passenger details
        const sql = 'SELECT * FROM `passenger` WHERE `userID` = ?;'
        const params = [userID]
        const metadata = await this._database.query(sql, params)
        const data = this._database.pagination.emptyOrRows(metadata)
        return data
    }
    
    async createPassenger(userID, firstName, lastName, DOB) {
        // INSERT into the passenger table 
        const sql = `INSERT INTO PASSENGER VALUES (?,?,?,?);`
        const params = [firstName, lastName, DOB, userID]
        const rows = await this._database.query(sql, params)
        const lastInsertID  = rows.insertId
        return lastInsertID 
    }

    async getDriverRating(userID){
        const sql = "SELECT * FROM passengerRating WHERE userID=?"
        const params = [userID]
        const metadata = await this._database.query(sql, params)
        const data = this._database.pagination.emptyOrRows(metadata)
        return [data, metadata]
    }
    
    async deletePassenger(userID){
        // Delete from Passenger
        const sql = "DELETE FROM PASSENGER WHERE userID=?"
        const params = [userID]
        return await this._database.query(sql, params) 
    }
}

module.exports = {PassengerRepository}