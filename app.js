const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const users = require('./routes/users');
const defaultRoute = require('./routes/defaultRoute');

const app = express(); // inicializamos express y lo declaramos función "()"
const PORT = 3000;
app.use(bodyParser.json());
app.use('/', defaultRoute);
app.use('/users', users);

// Conectarse a la DB de mongo
mongoose.connect('mongodb://localhost/coredumped', (err) => {
  if (err) {
    console.log(`ERROR: connecting to Database. ${err}`);
  }
  // Iniciar servidor express
  app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}/`));
});
