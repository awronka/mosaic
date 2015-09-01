'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Page = mongoose.model('Page');
var Comment = mongoose.model('Comment');

router.get('/', function (req, res, next) {
	Page.find({url: req.query.url}).populate({path: 'comments'}).exec(function (err, doc){
		console.log(doc);
	})
	.then(function(doc) {
		res.send(doc);
	})
});

module.exports = router;