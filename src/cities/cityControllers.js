const sequelize = require('../models/').sequelize;
const initModels = require('../models/init-models');
const models = initModels(sequelize)

const getAllBucaramangaRestaurants = async () => {
    const users = await models.bucaramanga.findAll()
    // select * from users;
    console.log(users);
    return users
}

const getAllFloridaRestaurants = async () => {
    const users = await models.florida.findAll()
    // select * from users;
    return users
}

const getAllGironRestaurants = async () => {
    const users = await models.florida.findAll()
    // select * from users;
    return users
}

module.exports = {
    getAllBucaramangaRestaurants,
    getAllFloridaRestaurants,
    getAllGironRestaurants
}