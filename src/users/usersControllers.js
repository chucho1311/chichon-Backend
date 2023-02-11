const crypto = require('../utils/crypto');
const uuid = require('uuid');
const sequelize = require('../models/').sequelize;
const initModels = require('../models/init-models');

const models = initModels(sequelize)

const getAllUsers = async () => {
    const users = await models.users.findAll({
        attributes: {
            exclude: ["password"]
        }
    })
    // select * from users;
    return users
}

const getUserById = async (id) => {
    const user = await models.users.findByPk(id, {
        attributes: {
            exclude: ["password"]
        }
    })
    return user
}

const getUserByEmail = async (email) => {
    const user = await models.users.findOne({
        where: {
            email
        }
    });
    return user;
};

const registerUser = async (data) => {
    const hashedPassword = crypto.hashPassword(data.password);
    const userId = uuid.v4();
    //! const newUser = {
    //!     id: userId,
    //!     ...data,
    //!     password: hashedPassword
    //! };
    //! usersDB.push(newUser)

    const newUser = models.users.create({
        id: userId,
        ...data,
        password: hashedPassword
    })
    //? SQL Query: insert into users (id, ...data, password) values (.....)

    return {
        message: `User created succesfully with the id: ${userId}`,
        user: newUser,
    };
};

const updateUser = async (id, data) => {
    try {
        const user = await models.users.update(data, {
            where: {
                id
            }
        })
        return {
            message: `User with id:${id} updated succesfully`,
            user
        }
    } catch (error) {
        return error
    }
}

const deleteUser = async (id) => {
    try {
        const user = await models.users.destroy({
            where: {
                id
            }
        })
        return {
            message: `User with id:${id} deleted succesfully`,
            user
        }
    } catch (error) {
        return error
    }
}

module.exports = {
    registerUser,
    getUserByEmail,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
