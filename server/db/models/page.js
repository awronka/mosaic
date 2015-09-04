'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	url: {type: String, required: true},
	comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
	createdAt: {type: Date, expires: '21d', default: Date.now}
});

mongoose.model('Page', schema);