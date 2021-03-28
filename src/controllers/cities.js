const express = require('express');
const Success = require('../handler/successHandler');
const {findCitiesLogic} = require('../services/cityService');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const cities = async (req, res, next) => {
    try {
        const cities = await findCitiesLogic(req.params.city)
        const success = new Success(cities)
        res.json(success);
        
    } catch (err) {
        next(err)
    }
};
module.exports = {
    cities
}