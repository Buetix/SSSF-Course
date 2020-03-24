'use strict';
//authController
const jwt = require('jsonwebtoken');
const passport = require('passport');

const login = (req, res) => {
        passport.authenticate('local', {session: false}, (err, user, info) => {
            console.log('error', err);
        if (err || !user) {
            return res.status(400).json({
                message: 'Something is not right',
                //User sent only for testing purposes
                user   : user
            });
        }       req.login(user, {session: false}, (err) => {
            if (err) {
                res.send(err);
            }           // generate a signed son web token with the contents of user object and return it in the response
                        // const token = jwt.sign(user, 'your_jwt_secret');
                const token = jwt.sign(user, 'your_jwt_secret');
            return res.json({user, token});
        });
    })(req, res);
};

module.exports = {
    login
};