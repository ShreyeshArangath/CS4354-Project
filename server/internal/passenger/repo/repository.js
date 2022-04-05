class PassengerRepository {
    constructor(database) {
        this.database = database
    }
 
    createTrip(passengerId, startingLocation, destination) {
        // Insert into Trip Table 
        // Insert into PassengerTrips Table  
    }

    cancelTrip() {
        // Delete from PassengerTrips 
    }

    retrieveTrip(passengerId, tripId) {
        // Get row from Trip table based on tripId 
    }
}