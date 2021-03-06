var commentFlags = $('.MosaicDOMRevealerCommentFlag');
var commentInputs = $('.MosaicDOMRevealerCommentInput');
var visibilityStatus = null;

/*---------------
REMOVE COMMENTS 
-----------------*/
if (commentFlags.length !== 0){

	// Remove Comment Divs
	commentFlags.remove();
	commentInputs.remove();

	// Set visibility to true
	visibilityStatus = false;

/*---------------
LOAD COMMENTS 
-----------------*/
} else {
	// Make a GET for comments and populate - do I send a message for current tab's info? Is it an updatePageComments call to the background.js?
	// Upon getting info from background.js, we populate

	chrome.runtime.sendMessage({action: "getMosaicData"}, function(response){	// Get Page Comments
		// Parse Response Data
		var comments = response.data.comments;

		$.each(comments, function(index, value) {		// For each response, append to DOM
			// Refine Selector
			var selector = value.path.join(" ").replace(/div/g,"");
			// Get Positioning
			var offsetTop = $(selector).offset().top;
			var offsetLeft = $(selector).offset().left;
			var targetWidth = $(selector).width();
			var determineHorizontalPosition = function(){
				if (offsetLeft+targetWidth+200 > $(window).width()){
					return offsetLeft+targetWidth-200;						
				} else {
					return offsetLeft+targetWidth;
				}
			}
			// DIV Template
			var commentDiv = "<div class='MosaicDOMRevealerCommentFlag' style='top:" + offsetTop + "px;left:" + determineHorizontalPosition() + "px;'><ol class='commentList'><li>" + value.comment + "</li></ol>";
					
			// Attach
			$(selector).prepend(commentDiv);
			// $(selector).children('.MosaicDomRevealerCommentFlag').children('ol').append("<li>" + value.comment + "</li>")
		});
		// Set visibility to true
		visibilityStatus = true;
	});
}

/*---------------
Return a value to executeScript callback by declaring a var last
-----------------*/
var result = visibilityStatus;