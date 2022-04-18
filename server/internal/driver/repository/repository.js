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
        const sql = 'SELECT * FROM `driver` WHERE `userID`=?;'
        const params = [userID]
        const metadata = await this._database.query(sql, params)
        const data = this._database.pagination.emptyOrRows(metadata)
        return data 
    }

    async createDriver(userID, firstName, lastName, DOB) {
        // INSERT into the driver table  
        const sql = `INSERT INTO DRIVER VALUES (?,?,?,?);`
        const params = [firstName, lastName, DOB, userID]
        const rows = await this._database.query(sql, params)
        const lastInsertID  = rows.insertId
        return lastInsertID
    }

    async getDriverRating(userID){
        const sql = "SELECT * FROM driverRating WHERE userID=?"
        const params = [userID]
        const metadata = await this._database.query(sql, params)
        const data = this._database.pagination.emptyOrRows(metadata)
        return [data, metadata]
    }

    async deleteDriver(userID){
        // Delete from Driver
        const sql = "DELETE FROM DRIVER WHERE userID=?"
        const params = [userID]
        return await this._database.query(sql, params) 
    }
}

module.exports = {DriverRepository}