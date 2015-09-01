/*---------------
VARIABLES + FUNCTIONS
-----------------*/
var overlay_id = 'MosaicDOMRevealer';
// Filtering classes for DIV flags
var filterAttributes = function(tag) {
	// console.log(tag);
	if (tag === undefined || tag === "" || tag === 'MosaicDOMRevealerHoverState' || tag === 'ng-scope' || tag === 'ng-binding' || tag === 'ng-isolate-scope' || tag === 'MosaicDOMRevealerEventState'){
		return false;
	} else {
		return true;
	}
}
// Filter Click Events so they only happen once
var lastEventTarget;
var collapseEventCalls = function(target) {
	if (target != lastEventTarget){
		lastEventTarget = target;
		return true;
	} else {
		return false;
	}
}
// Comment Submission
var submitComment = function(){

}

/*---------------
ELEMENT HOVER SETTINGS
-----------------*/
$('body *').hover(
	function(event) {
		// Since passing variables back and forth is a bit weird, starting off just checking for the stylesheet for hovers is active
		if (document.getElementById(overlay_id)){
			/*-------------------
			// THIS
			/-------------------*/
			// Get Attributes
			if ($(this).attr("class") !== undefined) var thisClass = $(this).attr("class").split(" ").filter(filterAttributes);
			if ($(this).attr("id") !== undefined) var thisId = $(this).attr("id").split(" ").filter(filterAttributes);

			// Construct Flag
			var element = "<div class='MosaicDOMRevealerHoverStateFlag'>";
			element = element + "Type: " + event.target.nodeName + "<br>";
			if (thisId) element = element + "Id: " + thisId;
			if (thisId && thisClass) element = element + "<br>";
			if (thisClass && thisClass != "") element = element + "Classes: " + thisClass;
			element = element + "</div>"

			// Append Flag
			$(this).prepend(element);

			// Mosaic Hover
			$(this).addClass('MosaicDOMRevealerHoverState');

			$(this).click(function(e) {
				if (collapseEventCalls(e.target)){
					// Get Positioning of Element for setting up Comment Div
					var offsetTop = $(e.target).offset().top;
					var offsetLeft = $(e.target).offset().left;
					var targetWidth = $(e.target).width();
					var determineHorizontalPosition = function(){
						if (offsetLeft+targetWidth+200 > $(window).width()){
							return offsetLeft+targetWidth-200;						
						} else {
							return offsetLeft+targetWidth;
						}
					}
					// Append Comment Div
					var commentDiv = "<div class='MosaicDomRevealerCommentFlag' style='top:" + offsetTop + "px;left:" + determineHorizontalPosition() + "px;'><h4>Comment</h4>" + "<br>" + "<ul></ul>" + "<br>";
					var inputSection = "<div><form><input type='text' placeholder='Leave a Comment' /><br><button type='submit'>Submit</button></form></div>"
					var fullCommentDiv = commentDiv+inputSection;
					$(e.target).prepend(fullCommentDiv);
				};
			});
			/*-------------------
			// Parents
			/-------------------*/
			// parentHolder = $(this).parent();
			$(this)
				.parentsUntil('body')
					.addClass("MosaicDOMRevealerHoverState");
		}
	},
	function(event) {
		// If there is a shared parent, don't remove?
		$(this).removeClass('MosaicDOMRevealerHoverState');
		$('.MosaicDOMRevealerHoverStateFlag').remove();
	});