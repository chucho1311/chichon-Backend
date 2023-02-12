const router = require('express').Router();
const cityServicesHandler = require('./cityServices');

router 
    //? Rutas de usuarios
    .get("/bucaramanga",cityServicesHandler.getAllBucaramangaRestaurants)
    .get("/florida", cityServicesHandler.getAllFloridaRestaurants)
    .get("/giron", cityServicesHandler.getAllGironRestaurants)

module.exports = {
    router
}