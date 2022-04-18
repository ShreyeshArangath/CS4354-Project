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
    router.delete("/trips/:tripID", async function (req, res, next) {
        try {
            const tripID = req.params.tripID
            if (tripID) {
                const metadata = await adminController.cancelTrip(tripID)
                res.json(metadata)
            }
            else {
                res.status(400);
                res.send("Check request body parameters")
            }

        } catch (err) {
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
        } catch (err) {
            const errMessage = "Error while retrieving trip info using state: " + req.params.state + err.message
            res.status(404)
            res.send(errMessage)
            next(err);
        }
    })

    /**
        * @api {get} api/admin/passengers       Get all passengers
        * @apiName GetPassengers 
        * @apiGroup Admin
        * @apiSuccess {data}                    All passenger information
    */
    router.get("/passengers", async function (req, res, next) {
        try {
            const data = await adminController.getAllPassengers()
            res.json(data)
        } catch (err) {
            const errMessage = "Error while retrieving passengers" + err.message
            res.status(404)
            res.send(errMessage)
            next(err);
        }
    })

    /**
        * @api {get} api/admin/drivers       Get all drivers
        * @apiName GetDrivers
        * @apiGroup Admin
        * @apiSuccess {data}                    All driver information
    */
    router.get("/drivers", async function (req, res, next) {
        try {
            const data = await adminController.getAllDrivers()
            res.json(data)
        } catch (err) {
            const errMessage = "Error while retrieving drivers" + err.message
            res.status(404)
            res.send(errMessage)
            next(err);
        }
    })

    /**
      * @api {get} api/admin/drivers/:userID       Get driver info
      * @apiName GetDriverByID
      * @apiGroup Admin
      *  @apiParam userID                           user ID of the driver 
      * @apiSuccess {data}                     driver information
  */
    router.get("/drivers/:userID", async function (req, res, next) {
        try {
            const userID = req.params.userID
            if (userID) {
                const data = await adminController.getDriver(userID)
                res.json(data)
            }
            else {
                res.status(400);
                res.send("Check userID param")
            }
        } catch (err) {
            const errMessage = "Error while retrieving passenger" + err.message
            res.status(404)
            res.send(errMessage)
            next(err);
        }
    })

    /**
        * @api {get} api/admin/passengers/:userID       Get passenger info
        * @apiName GetPassengerByID
        * @apiGroup Admin
        *  @apiParam userID                           user ID of the passenger 
        * @apiSuccess {data}                     passenger information
    */
    router.get("/passengers/:userID", async function (req, res, next) {
        try {
            const userID = req.params.userID
            if (userID) {
                const data = await adminController.getPassenger(userID)
                res.json(data)
            }
            else {
                res.status(400);
                res.send("Check userID param")
            }
        } catch (err) {
            const errMessage = "Error while retrieving passenger" + err.message
            res.status(404)
            res.send(errMessage)
            next(err);
        }
    })

    return router;
}

module.exports = { getAdminRouter }