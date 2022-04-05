class DBHelper{
    constructor(mysql, host, user, password, database) {
     this.connection = mysql.createConnection({
        host     : host,
        user     : user,
        password : password,
        database : database
      });
    }

    establishConnection() {
        this.connection.connect((err) => {
            if (err) {
                console.error("There was an issue connecting to MySQL: Error Stack: " + err.stack)
                return
            }
            console.log('Connected with to MYSQL with Thread ID: ' + this.connection.threadId);

          });
    }

    stopConnection() {
        this.connection.end();
    }
    
} 

module.exports = {DBHelper}