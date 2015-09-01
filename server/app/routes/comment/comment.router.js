'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Page = mongoose.model('Page');
var Comment = mongoose.model('Comment');

router.post('/', function (req, res, next) {
	// Comment.create(req.body)
});

module.exports = router;