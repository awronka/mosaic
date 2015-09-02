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

			/*-------------------
			// COMMENTS
			/-------------------*/
			$(this).click(function(e) {
				if ($('#MosaicDOMRevealer').length !==0){
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
						var commentDiv = "<div class='MosaicDOMRevealerCommentFlag' style='top:" + offsetTop + "px;left:" + determineHorizontalPosition() + "px;'><h4>Comment</h4><ol></ol>";
						var inputDiv = "<div class='MosaicDOMRevealerCommentInput'><input class='commentInput' type='text' placeholder='Leave a Comment' /><button class='commentSubmit' type='submit'>Submit</button></div></div>";
						var fullSection = commentDiv+inputDiv;
						$(e.target).prepend(fullSection);

						//Handle showing/hiding
						$(e.target).children('.MosaicDomRevealerCommentFlag').mouseover(function(e) {
							console.log($(e.target));
							$(e.target).find('.MosaicDomRevealerCommentInput').show();
						}).mouseleave(function(e) {
							$(e.target).find('.MosaicDomRevealerCommentInput').hide();
						});

						// Handle Submissions
						$(e.target).find('.commentSubmit').click(function(e){
							// Get input value
							var inputVal = $(e.target).parent().children('.commentInput').val()
							if(inputVal != "") {
								// Append it to UL
								$(e.target).parent().parent().children('ol').append("<li>" + inputVal + "</li>");

								// Get path and POST request
								var parentPath = [];
								$(this).parents().not('html').each(function(){
									var entry = this.tagName.toLowerCase();
									if(this.className) {
										entry = entry + "." + this.className.replace(/MosaicDOMRevealerHoverState/g, '').replace(/MosaicDOMRevealerCommentFlag/g, '').replace(/MosaicDOMRevealerCommentInput/g, '').replace(/ /g, '.');
										entry = entry.replace(/\.$/, '');
									}
									parentPath.push(entry);
								});
								parentPath.reverse();
								console.log(parentPath.join(" "));

								// chrome.tabs.getCurrent(function(tab){
									chrome.runtime.sendMessage({action:"addComment", path: parentPath, input: inputVal}, function(response){
										console.log(response.status);
									});
								// });

								// Clear value
								$(e.target).parent().children('.commentInput').val('');

								// Close input
								// $(e.target).parent().hide();
							}
						});
					};
				}
			});

			/*-------------------
			// PARENTS
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