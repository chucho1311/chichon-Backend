const { toPromise } = require("../utils/toPromise");
const cityController = require("./cityControllers");

const getAllBucaramangaRestaurants = async (req, res) => {

    const [users, error] = await toPromise(cityController.getAllBucaramangaRestaurants())
    if (error || !users) {
        res.status(400).json({ message: 'Ups, ocurrio un error' })
    }
    res.status(200).json(users)
}

const getAllFloridaRestaurants = async (req, res) => {

    const [users, error] = await toPromise(cityController.getAllFloridaRestaurants())
    if (error || !users) {
        res.status(400).json({ message: 'Ups, ocurrio un error' })
    }
    res.status(200).json(users)
}

const getAllGironRestaurants = async (req, res) => {

    const [users, error] = await toPromise(cityController.getAllGironRestaurants())
    if (error || !users) {
        res.status(400).json({ message: 'Ups, ocurrio un error' })
    }
    res.status(200).json(users)
}

module.exports = {
    getAllBucaramangaRestaurants,
    getAllFloridaRestaurants,
    getAllGironRestaurants
}