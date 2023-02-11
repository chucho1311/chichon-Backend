const userControllers = require('../users/usersControllers');
const crypto = require('../utils/crypto');
const { toPromise } = require('../utils/toPromise');

const checkUsersCredential = async (email, password) => {
    const [user, err] = await toPromise(userControllers.getUserByEmail(email));
    if (!err && user.dataValues) {
        console.log(user)
        return crypto.comparePassword(password, user.password);
    } else {
        return null;
    }
};

module.exports = {
    checkUsersCredential,
};
