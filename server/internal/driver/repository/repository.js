class DriverRepository {
    constructor(database) {
        this._database = database
    }

    async getDriver(userID) {
        // GET driver details
        const metadata = await this._database.query('SELECT * FROM `driver` WHERE `userID` = ?', [userID])
        const data = this._database.pagination.emptyOrRows(metadata)
        return [data, metadata] 
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

module.exports = {DriverRepository}