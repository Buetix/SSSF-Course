'use strict';
// catRoute
const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');

const multer = require('multer');
const upload = multer({dest: './uploads/'});

router.get('/', catController.cat_list_get);
router.get('/:id', catController.cat_get);

router.post('/', upload.single('cat'), (req, res, next) => {
   next(); 
});



//Week1 stuff 
/*
router.post('/', (req, res) => {
    res.send('With this endpoint you can add cats.')
});

router.put('/', (req, res) => {
    res.send('With this endpoint you can edit cats.')
});

router.delete('/', (req, res) => {
    res.send('With this endpoint you can delete cats.')
});

 */

module.exports = router;