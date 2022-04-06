const express = require('express');

function getDriverRouter(driverController) {
    const router = express.Router()
    router.get('/', async function(req, res, next) {
        try {
            const data =  await driverController.getDriver("elon.musk@twitter.com")
            res.json(data)
        } catch(err) {
            console.error(`Error while getting programming languages `, err.message);
            next(err);
        }
    
    });    
    return router; 
}

module.exports = {getDriverRouter}