class DBHelper {
    constructor(mysql, config, pagination) {
        this.config = config
        this.pagination = pagination
        this.mysql = mysql
        this.connection = null
    }

    async createConnection() {
        return  await this.mysql.createConnection({
            host: this.config["host"], 
            user: this.config["user"], 
            password: this.config["password"], 
            database: this.config["database"]
        })
    }

    async stopConnection() {
        return await connection.end();
    }

    async query(sql, params) {
        const connection = await this.createConnection()
        var data, error; 
        const [results, ] = await connection.execute(sql, params);
        return results;
    }

}

module.exports = {
    DBHelper
}