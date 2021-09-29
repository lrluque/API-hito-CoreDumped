import express from 'express';
import bodyParser from 'body-parser';
import users from './routes/users.js';
import defaultRoute from './routes/defaultRoute.js';
 //importamos express y body-parser

const app = express(); //inicializamos express y lo declaramos función "()"
const PORT = 3000;

app.use(bodyParser.json());
app.use('/', defaultRoute);
app.use('/users', users);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}/`));

