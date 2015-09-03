'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var Page = mongoose.model('Page');
var Comment = mongoose.model('Comment');

/*---------------
GET PAGE
-----------------*/
router.get('/', function (req, res, next) {
	// Find a page, populate comments, and send back
	Page.findOne({url: req.query.url}).populate({path: 'comments'}).exec(function (err, populatedPage){
		if (err) return next(err);
		console.log('Populated Doc: ', populatedPage);
		res.send(populatedPage);
	});
});

/*---------------
DELETE COMMENTS DOCS AND CONNECTED PAGE DOC
-----------------*/
router.delete('/comments', function (req, res, next) {
	// Delete comment and page documents
	Page.findOne({url: req.body.page}, function(err, pageToDelete) {
		if (pageToDelete){ // If page exists, remove comments
			Comment.find({_id: { $in: pageToDelete.comments }}).remove().exec();
			// Delete Page - Chaining remove to the end of the query doesn't remove the page for some reason
			pageToDelete.remove(); 
		}
	});
});

module.exports = router;