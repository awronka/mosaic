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







/*---------------
v1 -- CSS IS AWFUL TO WORK WITH
-----------------*/
// var comment_overlay_id = 'MosaicCommentRevealer';
// var commentStyle = document.getElementById(comment_overlay_id);
// var commentVisibilityBool = false;

// if (!commentStyle) {
// 	commentStyle = document.createElement('style');
// 	commentStyle.setAttribute('id',comment_overlay_id);
// 	document.head.appendChild(commentStyle);
// 	commentStyle.sheet.insertRule(
// 		'.MosaicDomRevealerCommentFlag { \
// 			position: absolute; \
// 			z-index: 10000; \
// 			width: 200px; \
// 			padding: 4px; \
// 			background-color: rgba(24, 200, 24, .5); \
// 			color: black; \
// 			font-size: 8px; \
// 			font-weight: bold; \
// 			text-align: left; \
// 			font-family: Helvetica, Arial, Sans-Serif; \
// 			outline: none; \
// 		}',
// 		0);
// 	commentStyle.sheet.insertRule(
// 		'.MosaicDomRevealerCommentFlag { \
// 			visibility: visible; \
// 		}',
// 		1);
// } else {
// 	if (!commentVisibilityBool){
// 		// Show Comments
// 		commentVisibilityBool = true;
// 		commentStyle.sheet.insertRule(
// 			'.MosaicDomRevealerCommentFlag { \
// 				visibility: visible; \
// 			}',
// 			1);
// 	} else {
// 		// Hide Comments
// 		commentVisibilityBool = false;
// 		commentStyle.sheet.insertRule(
// 			'.MosaicDomRevealerCommentFlag { \
// 				visibility: hidden; \
// 			}',
// 			1);
// 	}	
// }

