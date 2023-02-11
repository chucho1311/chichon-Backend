const router = require('express').Router();
const passport = require('passport');
const config = require('../config');
const userServicesHandler = require('./usersServices');
// require('../utils/auth')(passport);

router 
    //? Rutas de usuarios
    .get("/users",userServicesHandler.getAllUsers)
    .get("/users/:id", userServicesHandler.getMyUserData)
    // .get("/users/my-profile", passport.authenticate('jwt', config.jwtSecret), userServicesHandler.getMyUserData)
    .post("/users", userServicesHandler.createUser)
    .delete("/users/:userId", userServicesHandler.deleteUser)

// router.route('/users')
//     .get(
//         userServicesHandler.getAllUsers
//     );

// router.route('/users/my-profile')
//     .get(
//         passport.authenticate('jwt', { session: false }),
//         userServicesHandler.getMyUserData
//     );

module.exports = {
    router
}