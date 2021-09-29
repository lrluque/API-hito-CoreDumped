const User = require('../models/userModel');


/**
 * Obtener lista de usuarios
 * Si hay error, devuelve error, y si no, devuelve los datos en userData
 */
function getUser(req, res) {
    User.find(function(err, userData) {
        if (err) {
            return res.status(400).send(err.message);
        }
        return res.send(userData);
    });
}

/**
 * Crear nuevo usuario
 *
 */
function postUser(req, res) {
    const nUser = new User(req.body); //nUser crea un nuevo modelo con los datos introducidos en el post (body)
    nUser.save(function(err, newUser) { //guarda los datos en la base de datos y devuelve un error o el usuario creado
        if (err) return res.status(400).send({ message: 'Error', error: err });
        return res.status(200).send(newUser);
    });
}

module.exports = {
    getUser,
    postUser,
};