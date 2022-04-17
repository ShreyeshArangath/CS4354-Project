const express = require('express');

function getDriverRouter(driverController) {
    const router = express.Router()
    /**
        * @api {get} api/driver/trips       Get a list of the trips that are In-Queue  
        * @apiName GetTripsInQueue
        * @apiGroup Driver
        * @apiSuccess {data}                List of all In-Queue trips  
    */
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

    /**
        * @api {get} api/driver/trips/:tripID       Get a list of the trips that are In-Queue  
        * @apiName GetTripsInQueue
        * @apiGroup Driver        
        * @apiParam tripID                          ID of the trip selected by the driver           
        * @apiSuccess {data}                        Details of the as defined in the entities  
    */
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


    /**
        * @api {get} api/driver/trips/:tripID       Get a list of the trips that are In-Queue  
        * @apiName GetTripsInQueue
        * @apiGroup Driver        
        * @apiParam tripID                          ID of the trip selected by the driver           
        * @apiSuccess {driverPaymentAmount: int}    Driver Pay Cut from the trip  
    */
    router.get("/trips/payment/:tripID", async function (req, res, next) {
        try {
            const tripID = req.params.tripID
            if(tripID) {
                const data = await driverController.getDriverPaymentAmount(tripID)
                res.json({"driverPaymentAmount": data})
            }
        } catch(err) {
            const errMessage = "Error while retrieving trip payment info: " + err.message
            res.status(404)
            res.send(errMessage)
        } 
    })

    /**
        * @api {post} api/driver/trips/accept/:tripID&:driverID      Accept a trip that is In-Queue  
        * @apiName AcceptTrip
        * @apiGroup Driver        
        * @apiParam tripID                          ID of the trip selected by the driver  
        * @apiParam driverID                        ID of the driver          
        * @apiSuccess {update}                      Metadata pertaining to updating state of the trip
        * @apiSuccess {insert}                      Metadata pertaining to inserting data into the DriverTrip table
    */
    router.post("/trips/accept/:tripID&:driverID", async function(req, res, next) {
        try {
            const tripID = req.params.tripID
            const driverID = req.params.driverID

            if (tripID && driverID) {
                const [insertionMetadata, updateStateMetadata] = await driverController.acceptTrip(tripID, driverID)
                res.json({
                    "update": updateStateMetadata,
                    "insert": insertionMetadata
                })
            } 
            else {
                res.status(400); 
                res.send("Check request body parameters")     
            }       
            
        } catch(err) {
            const errMessage = "Error while accepting the ride" + err.message
            res.status(404)
            res.send(errMessage)
            next(err);
        }
    })


    /**
        * @api {post} api/driver/trips/completed/:tripID     Complete a ride  
        * @apiName AcceptTrip
        * @apiGroup Driver        
        * @apiParam tripID                          ID of the trip selected by the driver         
        * @apiSuccess {update}                      Metadata pertaining to updating state of the trip
        * @apiSuccess {insert}                      Metadata pertaining to inserting data into the DriverTrip table
    */
    router.post("/trips/completed/:tripID", async function(req, res, next) {
        try {
            const tripID = req.params.tripID
            if (tripID) {
                const metadata = await driverController.completeTrip(tripID)
                res.json(metadata)
            } 
            else {
                res.status(400); 
                res.send("Check request body parameters")     
            }       
            
        } catch(err) {
            const errMessage = "Error while completing the ride: " + err.message
            res.status(404)
            res.send(errMessage)
            next(err);
        }
    })

    /* */
    return router; 
}

module.exports = {getDriverRouter}