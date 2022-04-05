class Trip {
    // From & To will conform to the Address class defined in the shared package 
    constructor(tripID, state, from, to) {
        this.tripID = tripID
        this.state = state
        this.from = from 
        this.to = to
        this.estimatedPrice = getEstimatedPrice(from, to)
        this.ETA = getETA(from, to) 
    }

    getEstimatedPrice(from, to){
        _min = 10 
        _max = 100

        min = Math.ceil(_min);
        max = Math.floor(_max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    getETA(from, to){
        _min = 10 
        _max = 50

        min = Math.ceil(_min);
        max = Math.floor(_max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

module.exports = {Trip}