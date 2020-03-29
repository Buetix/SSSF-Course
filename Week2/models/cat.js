'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catSchema = new Schema ({
   name: String,
    age: {type: Number, min: 0},
    weight: {type: Number, min: 0, max: 50},
    gender: {type:String, enum: ['male', 'female'], default: 'male'},
    color: String,
    owner: mongoose.ObjectId
});

module.exports = mongoose.model('Cat', catSchema);