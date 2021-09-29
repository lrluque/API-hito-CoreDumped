const User = require('../models/userModel');
/*
 * Obtener lista de usuarios
 * Si hay error, devuelve error, y si no, devuelve los datos en userData
 */
function getUser(req, res) {
  User.find((err, userData) => {
    if (err) {
      return res.status(400).send(err.message);
    }
    return res.send(userData);
  });
}
/**
 * Crear nuevo usuario
 * nUser crea un nuevo modelo con los datos introducidos en el post (body)
 * Se guardan los datos en la base de datos y devuelve un error o el usuario creado
 */
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
