const express = require('express');

function getDriverRouter(driverController) {
    const router = express.Router()

    router.get('/', async function(req, res, next) {
        try {
            const data =  await driverController.getDriver("elon.musk@twitter.com")
            res.json(data)
        } catch(err) {
            const errMessage = `Error while getting the driver information ` + err.message 
            res.status(404)
            res.send(errMessage)
            next(err);
        }
    
    });    

    // GET: List of all trips that are In-Queue
    router.get('/trips', async function(req, res, next) {
        try {
            const data = await driverController.getTrips()
            res.json(data)
        }catch(err) {
            const errMessage = "Error while getting all trips in queue" + err.message
            res.status(404)
            res.send(errMessage)
            next(err);
        }
    })

    // GET: Based on a given id get the trip information 
    router.get("/trips/:tripID", async function(req, res, next) {
        try {
            const tripID = req.params.tripID 
            if (tripID){
                const data = await driverController.getTripById(req.params.id)
                res.json(data)
            }
            else {
                res.status(400)
                res.send("Check request parameters/body")
            }
        }catch(err) {
            const errMessage = "Error while retrieving trip: " + err.message
            res.status(404)
            res.send(errMessage)
        } 
    } )

    router.post("/trips/accept/:tripID&:driverID", async function(req, res, next) {
        try {
            const tripID = req.params.tripID
            const driverID = req.params.driverID

            if (tripID && driverID) {
                const [insertData, updateStateData] = await driverController.acceptTrip(tripID, driverID)
                res.json({
                    "update": updateStateData,
                    " insert": insertData
                })
            }      
            
        } catch(err) {
            const errMessage = "Error while accepting the ride" + err.message
            res.status(404)
            res.send(errMessage)
            next(err);
        }
    })

    return router; 
}

module.exports = {getDriverRouter}