const express = require('express')

function getAdminRouter(adminController) {
    const router = express.Router()

    /**
        * @api {delete} api/admin/trips/:tripID       Delete the trip with the given trip ID
        * @apiName DeleteTrip
        * @apiGroup Admin
        * @apiParam tripID                          ID of the trip selected by the admin           
        * @apiSuccess {data}                        Deletion metadata   
    */
    router.delete("/trips/:tripID", async function(req, res, next) {
        try {
            const tripID = req.params.tripID
            if (tripID){
                const metadata = await adminController.cancelTrip(tripID)
                res.json(metadata)
            }
            else {
                res.status(400); 
                res.send("Check request body parameters")     
            }       
            
        }catch(err) {
            const errMessage = "Error while deleting the ride" + err.message
            res.status(404)
            res.send(errMessage)
            next(err);
        }
    })

      /**
        * @api {get} api/admin/trips/:staet       Get all trips based on a given staet
        * @apiName GetTripsByState 
        * @apiGroup Admin
        * @apiParam state                           state of the trip selected by the admin           
        * @apiSuccess {data}                        relevant trip info based on state    
    */
    router.get("/trips/:state", async function (req, res, next) {
        try {
            const state = req.params.state 
            if (state) {
                const data = await adminController.getTripInfoByState(state)
                res.json(data)
            }
            else {
                res.status(400); 
                res.send("Check tripId state")
            }
        }catch(err) {
            const errMessage = "Error while retriecing trip info using state: " + req.params.state + err.message
            res.status(404)
            res.send(errMessage)
            next(err);
        }
    })

    return router;
}

module.exports = {getAdminRouter}