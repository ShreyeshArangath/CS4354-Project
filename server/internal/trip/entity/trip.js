class Trip {
    // From & To will conform to the Address class defined in the shared package 
    constructor(tripID, state, from, to, tripRequestedTime, numPassengers) {
        this.tripID = tripID
        this.state = state
        this.from = from 
        this.to = to
        this.tripRequestedTime = tripRequestedTime 
        this.numPassengers = numPassengers
        this.price = this.getEstimatedPrice()
        this.eta = this.getETA()
    }

    getEstimatedPrice(from, to){
        const _min = 10 
        const _max = 100

        const min = Math.ceil(_min);
        const max = Math.floor(_max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    getETA(from, to){
        const _min = 10 
        const _max = 50

        const min = Math.ceil(_min);
        const max = Math.floor(_max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

module.exports = {Trip}