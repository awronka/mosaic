'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var Page = mongoose.model('Page');
var Comment = mongoose.model('Comment');

/*---------------
GET or CREATE PAGE
-----------------*/
router.get('/', function (req, res, next) {	
	Page.findOne({url: req.query.url}).exec() 	//Find a page with matching url
	.then(function(doc){

		if (doc){ // If the page exists, populate and send back
			console.log('Page Exists');

			Page.findOne({url: req.query.url}).populate({path: 'comments'}).exec(function (err, populatedDoc){
				if (err) return next(err);
				console.log('Populated Doc: ',populatedDoc);
				res.send(populatedDoc);
			});

		} else { // If the page does not exist, create a new Page
			console.log('Creating New Page');

			Page.create({url: req.query.url})
			.then(function(Page) {
				console.log('Page Created');
				res.send(Page);
			});
		}
	});

});

/*---------------
DELETE PAGE COMMENTS
-----------------*/
router.delete('/comments', function (req, res, next) {
	Page.findOneAndUpdate({url: req.body.page}, {comments: []}, {upsert: true, 'new': true}).exec()
	.then(function(Page){
		res.send(Page);
	});
});

module.exports = router;