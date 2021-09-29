const User = require('../models/userModel');

function getUser(req, res) {
    User.find({}, (err, userData) => {
        if (err) {
            return res.status(400).send(err.message);
        }
        return res.send(userData);
    });
}

function postUser(req, res) {
    const nUser = new User(req.body);
    nUser.save((err, newUser) => {
        if (err) return res.status(400).send({ message: 'Error', error: err });
        return res.status(200).send(newUser);
    });
}

module.exports = {
    getUser,
    postUser,
};