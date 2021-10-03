const users = require('../models.mocked/user.mocked')
const usersServiceMocked = {};



usersServiceMocked.addUsers = async (req, res) => {
    res.json({
        status: 'OK'
    })
};

usersServiceMocked.deleteUser = (req, res) => {
    res.json({
        status: 'OK'
    })
};

usersServiceMocked.getUsers = (req, res) => {
    res.json(users);
}

usersServiceMocked.modifyUser = (req, res) => {
    res.json({
        status: 'OK'
    })
}

module.exports = usersServiceMocked;