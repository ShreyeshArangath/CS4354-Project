const express = require('express');

function getPassengerRouter(passengerController) {
    const router = express.Router()
    router.get('/', async function(req, res, next) {
        //TODO: GET request 
    });    
    return router; 
}

module.exports = {getPassengerRouter}