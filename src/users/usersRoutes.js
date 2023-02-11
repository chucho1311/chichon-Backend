const router = require('express').Router();
const passport = require('passport');
const config = require('../config');
const userServicesHandler = require('./usersServices');

router 
    //? Rutas de usuarios
    .get("/users",userServicesHandler.getAllUsers)
    .get("/users/:id", userServicesHandler.getMyUserData)
   .post("/users", userServicesHandler.createUser)
    .delete("/users/:userId", userServicesHandler.deleteUser)

module.exports = {
    router
}