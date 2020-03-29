'use strict';
const router = require('express').Router();
const cat = require('../models/cat');

router.route('/cat').post( async (req, res) => {
    console.log('now we here');
    const myCat = await cat.create( {
        name: 'TestCat',
        age: 2,
        weight: 3,
        gender: 'male',
        color: 'grey'
    });
    res.send(`cat created with id: ${myCat._id}`);
});

router.route('/').get( async (req, res) => {
    res.send(await cat.find());
});

module.exports = router;