class PassengerRepository {
    constructor(database) {
        this._database = database
    }
 
    getPassenger(userID) {
        // GET passenger details
    }
    
    createPassenger(userID, firstName, lastName, DOB, totalTrips, ratings) {
        // INSERT into the driver table  
    }

    updatePassenger(userID, totalTrips, ratings) {
        // UPDATE Driver trip total and ratings 
    }

    deletePassenger(userID){
        // Delete from Driver
    }
}

module.exports = {PassengerRepository}