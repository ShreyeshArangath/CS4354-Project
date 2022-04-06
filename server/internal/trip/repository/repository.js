class TripRepository {
    constructor(database){
        this._database = database
    }

    requestTrip(passengerId, startingLocation, destination, numPassenger) {
        // Insert into Trip Table 
        // Insert into PassengerTrips Table  
    }

    acceptTrip(driverId, tripId) {
        // Insert into DriverTrip table 
        // Update Trip table state to In Progress 
    }

    updateTripState(tripId, state) {
        // Update Trip table state to the given state 
    }

    cancelTrip(tripId) {
        // Delete from Trip table 
    }

    insertTrip(tripId, price, state, to, from, time) {
        // Insert into the Trip table 
    }

    retrieveTripByUserID(passengerId, tripId) {
          // GET row from the trip table
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