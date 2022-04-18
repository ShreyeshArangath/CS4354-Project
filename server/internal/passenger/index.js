const express = require('express');
const {Trip}  = require('../trip/entity/trip')
function getPassengerRouter(passengerController) {
    const router = express.Router()
    const DEFAULT = "DEFAULT"

    /**
        * @api {post} api/passenger/trips/request Request a trip 
        * @apiName RequestRide
        * @apiGroup Passenger
        * @apiBody {String} from            Address from which the passenger is travelling 
        * @apiBody {String} to              Address to which the passenger is travelling 
        * @apiBody {Number} numPassengers   Number of passengers travelling 
        * @apiBody {passengerID}            email of the passenger 
        * @apiBody 
        * @apiSuccess {tripID}              ID of the trip inserted into the database 
        * @apiSuccess {passengerTrip}       metadata for passengerTripData insertion 
    */
    router.post('/trips/request', async function(req, res, next) {
        try {
            const from = req.body.from 
            const to = req.body.to
            const numPassengers = req.body.numPassengers 
            const passengerID = req.body.passengerID
            const state = "IN_QUEUE"

            if (from && to && numPassengers && passengerID) {
                const trip = new Trip(DEFAULT, state, from, to, DEFAULT, numPassengers)  
                const [tripID, insertionMetadata] = await passengerController.requestTrip(passengerID, trip)
                console.log("TripID: ", tripID)
                res.json({
                    "tripID": tripID,
                    "passengerTrip": insertionMetadata
                    })
            } 
            else {
                res.status(400); 
                res.send("Check request body parameters")
                
            }  
            
        } catch(err) {
            const errMessage = "Error while requesting the ride: " + err.message
            res.status(404)
            res.send(errMessage)
            next(err);
        }
    });    


    /**
        * @api {get} api/passenger/rating/:userID       Get the rating info for a passenger 
        * @apiName GetPassengerRating
        * @apiGroup Passenger
        * @apiParam userId                          ID of the passenger           
        * @apiSuccess {data}                  Rating data    
    */
    router.get("/rating/:userID", async function (req, res, next) {
        try {
            const userID = req.params.userID
            if (userID) {
                const metadata = await passengerController.getRating(userID)
                res.json(metadata)
            } 
            else {
                res.status(400); 
                res.send("Check userID")     
            }       
            
        } catch(err) {
            const errMessage = "Error while retrieving passenger rating: " + err.message
            res.status(404)
            res.send(errMessage)
            next(err);
        }
    })

     /**
        * @api {post} api/passenger/trips/rating/:tripID     Rate a ride  
        * @apiName RateTrip
        * @apiGroup Driver        
        * @apiBody {Number} rating                  Rating given by the passenger for a trip
        * @apiParam tripID                          ID of the trip selected by the driver         
    */
      router.post("/trips/rating/:tripID", async function(req, res, next) {
        try {
            const tripID = req.params.tripID
            const rating = req.body.rating 
            if (tripID && rating) {
                const metadata = await passengerController.rateTrip(tripID, rating)
                res.json(metadata)
            } 
            else {
                res.status(400); 
                res.send("Check request body parameters")     
            }       
            
        } catch(err) {
            const errMessage = "Error while rating the ride: " + err.message
            res.status(404)
            res.send(errMessage)
            next(err);
        }
    })

    /**
        * @api {get} api/passenger/trips/driver/:tripID       Get the driver details of a specific trip
        * PRECONDITION: Trip must be In-Progress
        * @apiName GetDriverDetails
        * @apiGroup Passenger
        * @apiParam tripID                          ID of the trip selected by the passenger           
        * @apiSuccess {driverData}                  Deletion metadata   
    */
    router.get("/trips/driver/:tripID", async function(req, res, next) {
        try {
            const tripID = req.params.tripID
            if (tripID){
                const [driverData, getDriverIDMetadata, getDriverDetailsMetadata] = await passengerController.getDriverInfo(tripID)
                res.json({
                    "driverData": driverData, 
                    "getDriverIDMetadata": getDriverIDMetadata, 
                    "getDriverDetailsMetadata": getDriverDetailsMetadata
                })
            }
            else {
                res.status(400); 
                res.send("Check request body parameters")     
            }       
            
        }catch(err) {
            const errMessage = "Error while finding driver details: " + err.message
            res.status(404)
            res.send(errMessage)
            next(err);
        }
    })

    return router; 
}

module.exports = {getPassengerRouter}