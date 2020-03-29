'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const db = require('./models/db');
const catRouter = require('./routes/catRoute');
const createRouter = require('./routes/route');
const userRouter = require('./routes/userRoutes');
const bodyParser = require('body-parser');

app.use(cors());

app.use('/', createRouter);
app.use('/users', userRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*
app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html'); 
});
*/

db.on('connected', () => {
   app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});
