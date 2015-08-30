'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	page: {type: mongoose.Schema.Types.ObjectId, ref: 'Page'},
	elementPath: {type: String, required: true},
	comment: {type: String},
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('Comment', schema);