const router = require('express').Router()
const authHttpHandler = require('./authServices')

router.route('/login')
    .post(authHttpHandler.loginUser)


module.exports = {
    router
}