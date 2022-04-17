class TripRepository {
    constructor(database){
        this._database = database
    }

    async insertIntoPassengerTrips(passengerId, tripId) {
        const sql = "INSERT INTO `PASSENGER_TRIPS` VALUES (?, ?)"
        const params = [tripId, passengerId]
        return await this._database.query(sql, params)
    }

    async insertIntoDriverTrips(driverId, tripId) {
        const sql = "INSERT INTO `DRIVER_TRIPS` VALUES (?, ?)"
        const params = [tripId, driverId]
        return await this._database.query(sql, params)
    }

    async getDriverIDFromTrip(tripId) {
        const sql = "SELECT `driverID` from `DRIVER_TRIPS` WHERE `tripID`=?"
        const params = [tripId]
        const metadata = await this._database.query(sql, params)
        const data = this._database.pagination.emptyOrRows(metadata)
        return [data, metadata]
    }

    async updateTripState(tripId, state) {
        const sql = "UPDATE `TRIP` SET `state`=? WHERE `tripID`=?"
        const params = [state, tripId]
        return await this._database.query(sql, params)

    }

    async cancelTrip(tripId) {
        const sql = "DELETE FROM `TRIP` WHERE `tripID`=?"
        const params = [tripId]
        return await this._database.query(sql, params)
        
    }

    async insertTrip(trip) {
        const sql = "INSERT INTO `TRIP` (PRICE, STATE, toAddress, fromAddress, tripRequestedTime) VALUES(?, ?, ?, ?, CURTIME());"
        const params = [trip.price, trip.state, trip.from, trip.to]
        const rows = await this._database.query(sql, params)
        const lastInsertID  = rows.insertId
        return lastInsertID
    }

    async getTripByID(tripId) { 
        const sql = "SELECT * FROM `TRIP` WHERE `tripID`=?"
        const params = [tripId]
        const rows = await this._database.query(sql, params)
        const data = this._database.pagination.emptyOrRows(rows)
        return data 
    }

    async retrieveTripsByState(state, page, listPerPage){
        const offset = this._database.pagination.getOffset(page, listPerPage)
        const sql = "SELECT * FROM PASSENGER p, TRIP t WHERE p.userID IN \
        (SELECT passengerID FROM PASSENGER_TRIPS WHERE tripID = t.tripID) AND t.state=?;" 
        const params = [state]
        const rows = await this._database.query(sql, params)
        const data = this._database.pagination.emptyOrRows(rows)
        return data 
    }
}

module.exports = {TripRepository}