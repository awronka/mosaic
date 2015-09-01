/*---------------
v2 -- REMOVAL AND AJAX GET
-----------------*/
var commentFlags = $('.MosaicDomRevealerCommentFlag');
var visibilityStatus = null;

if (commentFlags.length !== 0){
	// Remove all flags if any exist
	commentFlags.remove();
	visibilityStatus = false;
} else {
	// Make a GET for comments and populate
	// $.get()
	visibilityStatus = true;
}

var result = visibilityStatus;