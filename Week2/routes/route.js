'use strict';
const router = require('express').Router();
const cat = require('../models/cat');

router.route('/cat').post( async (req, res) => {
    console.log('now we here');
    const myCat = await cat.create( {
        name: 'TestCat',
        age: 5,
        weight: 3,
        gender: 'male',
        color: 'grey'
    });
    res.send(`cat created with id: ${myCat._id}`);
});

router.route('/cat/:name').get( async (req, res) => {
    cat.find({name: req.params.name}, function (err, data){
       if(err) console.log(err);
       res.json(data); 
    });
});

module.exports = router;