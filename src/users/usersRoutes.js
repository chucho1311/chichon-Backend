const router = require('express').Router();
const userServicesHandler = require('./usersServices');

router 
    //? Rutas de usuarios
    .get("/users",userServicesHandler.getAllUsers)
    .get("/users/:id", userServicesHandler.getMyUserData)
    .post("/users", userServicesHandler.createUser)
    .put("/users/:userId", userServicesHandler.updateUser)
    .delete("/users/:userId", userServicesHandler.deleteUser)

module.exports = {
    router
}