'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var Page = mongoose.model('Page');
var Comment = mongoose.model('Comment');

/*---------------
POST A COMMENT
-----------------*/
router.post('/', function (req, res, next) { // Create Comment

	Page.findOne({url: req.body.url}, function(pageErr, foundPage) { // Find Page
		console.log('FOUND PAGE: ', foundPage);

		Comment.create({path: req.body.path, comment: req.body.input}, function (commentErr, createdComment){ // Create Comment
			console.log('CREATED COMMENT: ', createdComment);

			if (!foundPage) { // If page doesn't exist, create it with the comment id in its array
				Page.create({url: req.body.url, comments: [createdComment._id]}, function (creationErr, newPage){
					console.log('NEW PAGE: ', newPage);
				});
			} else { // If page exists, insert the comment
				foundPage.comments.push(createdComment._id);
				foundPage.save();
			}

			// Send back created Comment
			res.json(createdComment);
		})
	});
});

module.exports = router;