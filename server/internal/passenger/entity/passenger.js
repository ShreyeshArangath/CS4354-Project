class Passenger {
    constructor(userID, firstName, lastName, DOB, totalTrips, ratings) {
        this.userID = userID
        this.firstName = firstName
        this.lastName = lastName
        this.DOB = DOB
        this.totalTrips = totalTrips
        this.ratings = ratings
    }
}

module.exports = {Passenger}