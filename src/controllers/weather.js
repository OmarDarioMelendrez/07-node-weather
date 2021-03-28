const express = require('express');
const Success = require('../handler/successHandler');
const {weatherByCoordinatesLogic,weatherByCityIdLogic} = require('../services/weatherService');
const logger = require('../loaders/logger')
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const weatherByCoordinates = async (req, res, next) => {
    try {
        const {lon, lat } = req.query;
        let weatherNow = await weatherByCoordinatesLogic(lon, lat)
        const success = new Success(weatherNow)
        res.json(success);  
    } catch (err) {
        next(err)
    }
};
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const weatherByCityId = async (req, res, next) => {
    try {
        const city = req.params.city;
        const id = req.params.id;
        let weatherNowByCityId = await  weatherByCityIdLogic(city, id)
        const success = new Success(weatherNowByCityId)
        res.json(success);
        
    } catch (err) {
        next(err)
    }
};


module.exports = {
    weatherByCoordinates,
    weatherByCityId
}