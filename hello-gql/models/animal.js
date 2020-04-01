'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animal = new Schema ({
   animalName: String,
   species: [{type: mongoose.Types.ObjectId, ref: 'Species'}] 
});

module.exports = mongoose.model('Animal', animal);