const { toPromise } = require("../utils/toPromise")
const userControllers = require('./usersControllers')

const getAllUsers = async (req, res) => {

    const [users, error] = await toPromise(userControllers.getAllUsers())
    if (error || !users) {
        res.status(400).json({ message: 'Ups, ocurrio un error' })
    }
    // res.status(200).json(users)
    return res.status(200).json(users);
}

const getMyUserData = async (req, res) => {
    const {
        params: { userId },
    } = req;
    const [user, err] = await toPromise(userControllers.getUserById(userId))
    if (err || !user) {
        res.status(400).json({ message: 'Ups, ocurrio un error' })
    }
    console.log(user);
    res.status(200).json(user);
}

const createUser = async (req, res) => {
    const [newUser,error] = await toPromise(userControllers.registerUser(req.body));
    if (error || !newUser) {
        res.status(400).json({ message: 'Ups, ocurrio un error' })
    }
    console.log(newUser);
    res.status(200).json(newUser);
}

const updateUser = async (req, res) => {
    const {
        params: { userId },
    } = req;
    const [updatedUser, error] = await toPromise(userControllers.updateUser(userId,req.body))
    if (error || !updatedUser) {
        res.status(400).json({ message: 'Ups, ocurrio un error' })
    }
    console.log(updatedUser);
    res.status(200).json(updatedUser);
}

const deleteUser = async (req,res) => {
    const {
        params: { userId },
    } = req;

    const [deletedUser,error] = await toPromise(userControllers.deleteUser(userId));
    if (error || !deletedUser) {
        res.status(400).json({ message: 'Ups, ocurrio un error' })
    }
    console.log(deletedUser);

}


module.exports = {
    getAllUsers,
    getMyUserData,
    createUser,
    updateUser,
    deleteUser
}
