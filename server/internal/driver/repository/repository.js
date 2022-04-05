class DriverRepository {
    constructor(database) {
        this._database = database
    }

    getDriver(userID) {
        // GET driver details
    }
    
    createDriver(userID, firstName, lastName, DOB, totalTrips, ratings) {
        // INSERT into the driver table  
    }

    updateDriver(userID, totalTrips, ratings) {
        // UPDATE Driver trip total and ratings 
    }

    deleteDriver(userID){
        // Delete from Driver
    }
}