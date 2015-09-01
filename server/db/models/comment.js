'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	page: {type: mongoose.Schema.Types.ObjectId, ref: 'Page'},
	path: [{type: String}],
	comment: {type: String},
	author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('Comment', schema);