'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var Page = mongoose.model('Page');
var Comment = mongoose.model('Comment');

router.get('/', function (req, res, next) {

	console.log('Hit Page Router');
	
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

module.exports = router;