'use strict';
require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const MyGraphQLSchema = require('./schema/schema');
const port = 3000;
const db = require('./db/db');
const app = express();
const cors = require('cors');
const passport = require('./utils/pass');
const authRoute = require('./routes/authRoute');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// dummy function to set user (irl: e.g. passport-local)
const auth = (req, res, next) => {
    req.user = true;
    next();
};

// dummy function to check authentication (irl: e.g. passport-jwt)
const checkAuth = (req, res) => {
    passport.authenticate('jwt', {session: false}, (err, user) =>{
        if (err || !user) {
            throw new Error ('fucked up, yeet');
        }
    })(req, res);
};

//app.use(auth);

app.use('/auth', authRoute);

app.use(
    '/graphql', (req, res) => {
        graphqlHTTP({
            schema: MyGraphQLSchema,
            graphiql: true,
            context: {req, res, checkAuth},
        })(req, res);
    });


db.on('connected', () => {
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});
