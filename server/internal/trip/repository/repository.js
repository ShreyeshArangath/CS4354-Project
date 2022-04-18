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

    async updatePassengerRatingForTripID(tripId, passengerRating) {
        const sql = "UPDATE TRIP set passengerRating = ? WHERE tripID = ?;"
        const params = [passengerRating, tripId]
        return await this._database.query(sql, params)
    }

    async updateDriverRatingForTripID(tripID, driverRating) {
        const sql = "UPDATE TRIP set driverRating = ? WHERE tripID = ?;"
        const params = [driverRating, tripID]
        return await this._database.query(sql, params)
    }

    async getDriverRating(userID) {
        const sql = "SELECT * FROM driverRating WHERE userID=?;"
        const params = [userID]
        const rows = await this._database.query(sql, params)
        const data = this._database.pagination.emptyOrRows(rows)
        return data 
    }

    async getPassengerRating(userID) {
        const sql = "SELECT * FROM passengerRating WHERE userID=?;"
        const params = [userID]
        const rows = await this._database.query(sql, params)
        const data = this._database.pagination.emptyOrRows(rows)
        return data 
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

    async getTripStateFromID(tripID) {
        const sql = "SELECT state FROM `TRIP` WHERE `tripID`=?"
        const params = [tripID]
        const rows = await this._database.query(sql, params)
        const data = this._database.pagination.emptyOrRows(rows)
        return data 
    }

    async retrieveTripsByState(state, page, listPerPage){
        const offset = this._database.pagination.getOffset(page, listPerPage)
        var sql;
        if(state == "IN_QUEUE") {
            sql = "SELECT * FROM PASSENGER p, TRIP t WHERE p.userID IN \
        (SELECT passengerID FROM PASSENGER_TRIPS WHERE tripID = t.tripID) AND t.state=?;" 
        }
        else{
            sql = `SELECT t.*,
            p.fname      AS passenger_fname,
            p.lname      AS passenger_lname,
            p.userid     AS passenger_userID,
            p.dob        AS passenger_dob,
            d.fname      AS driver_fname,
            d.lname      AS driver_lname,
            d.userid     AS driver_userID,
            d.dob        AS driver_dob
     FROM   passenger p,
            driver d,
            trip t
     WHERE  p.userid IN (SELECT passengerid
                         FROM   passenger_trips
                         WHERE  tripid = t.tripid)
            AND d.userid IN (SELECT driverid
                             FROM   driver_trips
                             WHERE  tripid = t.tripid)
            AND t.state=?;`
        }

        const params = [state]
        const rows = await this._database.query(sql, params)
        const data = this._database.pagination.emptyOrRows(rows)
        return data 
    }
}

module.exports = {TripRepository}