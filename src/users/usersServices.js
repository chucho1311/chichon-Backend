const { toPromise } = require("../utils/toPromise")
const userControllers = require('./usersControllers')

const getAllUsers = async (req, res) => {

    const [users, error] = await toPromise(userControllers.getAllUsers())
    if (error || !users) {
        res.status(400).json({ message: 'Ups, ocurrio un error' })
    }
    res.status(200).json(users)
}

const getMyUserData = (req, res) => {
    console.log('this is the authenticated user email:', req.user.email)
    //const [user, err] = toPromise(userControllers.getUserById())
    res.status(200).json({ message: 'all good', data: req.user })
}

const createUser = async (req, res) => {
    const [newUser,error] = await toPromise(userControllers.registerUser(req.body));
    if (error || !newUser) {
        res.status(400).json({ message: 'Ups, ocurrio un error' })
    }
    console.log(newUser);
    res.status(200).json(newUser);
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
    deleteUser
}
