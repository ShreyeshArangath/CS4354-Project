class DriverRepository {
    constructor(database) {
        this._database = database
    }

    async getDrivers() {
        const sql = 'SELECT * FROM `driver`;'
        const params = []
        const metadata = await this._database.query(sql, params)
        const data = this._database.pagination.emptyOrRows(metadata)
        return [data, metadata] 
    }

    async getDriver(userID) {
        // GET driver details
        const sql = 'SELECT * FROM `driver` WHERE `userID` = ?;'
        const params = [userID]
        const metadata = await this._database.query(sql, params)
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