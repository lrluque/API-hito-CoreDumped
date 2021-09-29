const express = require('express');
const bodyParser = require('body-parser');
const users = require('./routes/users.js');
const defaultRoute = require('./routes/defaultRoute.js');



const app = express(); //inicializamos express y lo declaramos función "()"
const PORT = 3000;

app.use(bodyParser.json());
app.use('/', defaultRoute);
app.use('/users', users);


const userController = require("./controllers/userController");

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}/`));

