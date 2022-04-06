const express = require('express');

function getDriverRouter(driverController) {
    const router = express.Router()

    router.get('/', async function(req, res, next) {
        try {
            const data =  await driverController.getDriver("elon.musk@twitter.com")
            res.json(data)
        } catch(err) {
            console.error(`Error while getting the driver information `, err.message);
            next(err);
        }
    
    });    

    // GET: List of all trips that are In-Queue
    router.get('/trips', async function(req, res, next) {
        try {
            const data = await driverController.getTrips()
            res.json(data)
        }catch(err) {
            console.error("Error while getting all trips in queue", err.message); 
            next(err);
        }
    })

    // GET: Based on a given id get the trip information 
    router.get("/trips/:id", async function(req, res, next) {
        try {
            const tripID = req.params.id 
            if (tripID){
                const data = await driverController.getTripById(req.params.id)
                res.json(data)
            }
            else {
                res.statusCode(400)
            }
        }catch(err) {
            console.error("Error while getting all trips in queue", err.message); 
            next(err);
        } 
    } )


    return router; 
}

module.exports = {getDriverRouter}