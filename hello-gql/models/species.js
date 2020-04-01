'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const species = new Schema ({
   speciesName: String,
   category: [{type: mongoose.Types.ObjectId, ref: 'Category'}]
});

module.exports = mongoose.model('Species', species);