class PassengerRepository {
    constructor(database) {
        this.database = database
    }
 
    createTrip(passengerId, startingLocation, destination, numPassenger) {
        // Insert into Trip Table 
        // Insert into PassengerTrips Table  
    }

    cancelTrip(tripId) {
        // Delete from Trip 
    }

    retrieveTrip(passengerId, tripId) {
        // Get row from Trip table based on tripId 
    }
}