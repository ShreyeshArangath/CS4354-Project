class TripRepository {
    constructor(database){
        this._database = database
    }
    // passengerId, startingLocation, destination, numPassenger
    async insertIntoPassengerTrips(passengerId, tripId) {
        const sql = "INSERT INTO `PASSENGER_TRIPS` VALUES (?, ?)"
        const params = [tripId, passengerId]
        const rows = await this._database.query(sql, params)
        return rows 
    }

    async insertIntoDriverTrips(driverId, tripId) {
        // Insert into DriverTrip table 
        // Update Trip table state to In Progress 
        const sql = "INSERT INTO `DRIVER_TRIPS` VALUES (?, ?)"
        const params = [tripId, driverId]
        const rows = await this._database.query(sql, params)
        return rows 
    }

    async updateTripState(tripId, state) {
        // Update Trip table state to the given state
        const sql = "UPDATE `TRIP` SET `state`=? WHERE `tripID`=?"
        const params = [state, tripId]
        const rows = await this._database.query(sql, params)
        return rows 
    }

    cancelTrip(tripId) {
        // Delete from Trip table 
    }

    async insertTrip(trip) {
        // Insert into the Trip table 
        const sql = "INSERT INTO `TRIP` (PRICE, STATE, toAddress, fromAddress, tripRequestedTime) VALUES(?, ?, ?, ?, CURTIME());"
        const params = [trip.price, trip.state, trip.from, trip.to]
        const rows = await this._database.query(sql, params)
        const lastInsertID  = rows.insertId
        
        return lastInsertID
    }

    retrieveTripByUserID(passengerId, tripId) {
          // GET row from the trip table
    }

    async getTripByID(tripId) { 
        // GET trip info based on the trip Id 
        const sql = "SELECT * FROM `TRIP` WHERE `tripID`=?"
        const params = [tripId]
        const rows = await this._database.query(sql, params)
        const data = this._database.pagination.emptyOrRows(rows)
        return data 
    }

    async retrieveTripsByState(state, page, listPerPage){
        // Get all trips that conform to the given state
        // Look into pagination 
        const offset = this._database.pagination.getOffset(page, listPerPage)
        const sql = "SELECT * FROM `TRIP` WHERE `state`=?"
        const params = [state]
        const rows = await this._database.query(sql, params)
        const data = this._database.pagination.emptyOrRows(rows)
        return data 
    }
}

module.exports = {TripRepository}