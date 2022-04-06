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

    router.get('/trips', async function(req, res, next) {
        //TOOD: Get a list of all the trips that are in queue 
        try {
            const data = await driverController.getTrips()
            res.json(data)
        }catch(err) {
            console.error("Error while getting all trips in queue", err.message); 
            next(err);
        }
    })


    return router; 
}

module.exports = {getDriverRouter}