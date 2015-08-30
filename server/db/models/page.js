'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	url: {type: String, required: true},
	comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

mongoose.model('Page', schema);