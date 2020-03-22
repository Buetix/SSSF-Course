'use strict';
//userController
const userModel = require('../models/userModel');

const users = userModel.users;

const get_users  = (req, res) => {
    res.json(users)
};

const get_user = (req, res) => {
  const user = users.filter(user => user.id === req.params.id)
    res.json(user);
};

const log_user = (req, res) => {
    console.log('Name is: ', req.body.name);
    console.log('Email is: ', req.body.email);
};

module.exports = {
    get_user,
    get_users,
    log_user
};
