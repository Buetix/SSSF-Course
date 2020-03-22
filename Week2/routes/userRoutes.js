'use strict';
//userRoutes
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.get_users);
router.get('/:id', userController.get_user);

router.post('/', userController.log_user); 

module.exports = router;