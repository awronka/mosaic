'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var Page = mongoose.model('Page');
var Comment = mongoose.model('Comment');

/*---------------
POST A COMMENT
-----------------*/
router.post('/', function (req, res, next) {
	// Create Comment
	Comment.create({path: req.body.path, comment: req.body.input})
	.then(function(Comment) {
		// Insert Comment ID into page's comment array
		Page.findOneAndUpdate({url: req.body.url},{$addToSet: {comments: Comment._id}}).exec()
		.then(function(UpdatedPage) {
			// With page ID, update comment	
			Comment.page = UpdatedPage._id;
			Comment.findOneAndUpdate({_id: Comment._id}, Comment, {upsert: true}, function(err, comment){
				if(err) return next(err);
				res.json(comment);
			});
		});
	})
});

module.exports = router;