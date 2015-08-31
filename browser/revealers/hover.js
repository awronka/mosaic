var overlay_id = 'MosaicDOMRevealer';
var filterAttributes = function(tag) {
	// console.log(tag);
	if (tag === undefined || tag === "" || tag === 'MosaicDOMRevealerHoverState' || tag === 'ng-scope' || tag === 'ng-binding' || tag === 'ng-isolate-scope' || tag === 'MosaicDOMRevealerEventState'){
		return false;
	} else {
		return true;
	}
}

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
			element = "<div class='MosaicDOMRevealerHoverStateFlag'>";
			element = element + "Type: " + event.target.nodeName + "<br>";
			if (thisId) element = element + "Id: " + thisId;
			if (thisId && thisClass) element = element + "<br>";
			if (thisClass && thisClass != "") element = element + "Classes: " + thisClass;
			element = element + "</div>"

			// Append Flag
			$(this).prepend(element);

			// Mosaic Hover
			$(this).addClass('MosaicDOMRevealerHoverState');

			// Comment key press event - doing click for now
			$(this).click(function(){
				console.log('Adding Comment');
				$(this).append('<p>YO</p>');
				chrome.runtime.sendMessage({action: "addComment"}, function(response) {
					$(this).append($(this));
					console.log(response.status);
				});
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