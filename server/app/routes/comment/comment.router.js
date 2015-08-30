'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Page = mongoose.model('Page');
var Comment = mongoose.model('Comment');

router.get('/', function (req, res, next) {
	console.log('hey');
});

module.exports = router;