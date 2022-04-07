const express = require('express');
const {Trip}  = require('../trip/entity/trip')
function getPassengerRouter(passengerController) {
    const router = express.Router()
    const DEFAULT = "DEFAULT"
    router.post('/trips/request', async function(req, res, next) {
        try {
            const from = req.body.from 
            const to = req.body.to
            const numPassengers = req.body.numPassengers 
            const passengerID = req.body.passengerID
            const state = "IN_QUEUE"

            // ID and Date will be set in the SQL statement 
            if (from && to && numPassengers && passengerID) {
                const trip = new Trip(DEFAULT, state, from, to, DEFAULT, numPassengers)  
                const [tripID, insertPassengerTripData] = await passengerController.requestTrip(passengerID, trip)
                console.log("TripID: ", tripID)
                res.json({
                    "tripID": tripID,
                    "passengerTrip": insertPassengerTripData
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
    return router; 
}

module.exports = {getPassengerRouter}