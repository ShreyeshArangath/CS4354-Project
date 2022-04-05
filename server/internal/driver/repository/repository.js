class DriverRepository {
    constructor(database) {
        this.database = database
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
}