const express = require('express');
const bodyParser = require('body-parser');
const users = require('./routes/users.js');
const defaultRoute = require('./routes/defaultRoute.js');
const mongoose = require("mongoose");



const app = express(); //inicializamos express y lo declaramos función "()"
const PORT = 3000;

app.use(bodyParser.json());
app.use('/', defaultRoute);
app.use('/users', users);


const userController = require("./controllers/userController");

//Conectarse a la DB de mongo
mongoose.connect("mongodb://localhost/coredumped", function (err, res) {
    if (err) {
        console.log("ERROR: connecting to Database. " + err);
    }
    //Iniciar servidor express
    app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}/`));
});
