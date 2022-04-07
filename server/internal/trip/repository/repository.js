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

    retrieveTripsByState(state){
        // Get all trips that conform to the given state
        // Look into pagination  
    }

    cancelTrip(tripId) {
        // Delete from trip table 
    }
}

module.exports = {TripRepository}