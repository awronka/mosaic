var overlay_id = 'MosaicDOMRevealer';
var filterAttributes = function(tag) {
	// console.log(tag);
	if (tag === undefined || tag === "" || tag === 'MosaicDOMRevealerHoverState' || tag === 'ng-scope' || tag === 'ng-binding' || tag === 'ng-isolate-scope'){
		return false;
	} else {
		return true;
	}
}
$('body *').hover(
	function(event) {
		// Since passing variables back and forth is a bit weird, starting off just checking for the stylesheet adjustment
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
			// $(element).appendTo(this);

			// Mosaic Hover
			$(this).addClass('MosaicDOMRevealerHoverState');

			/*-------------------
			// Parents
			/-------------------*/
			$(this)
				.parentsUntil('body')
					.addClass("MosaicDOMRevealerHoverState");

		}
	},
	function(event) {
		// $(this).remove(element);
		$(this).removeClass('MosaicDOMRevealerHoverState');
		$('.MosaicDOMRevealerHoverStateFlag').remove()
		// $(this)
		// 	.parentsUntil('body',".MosaicDOMRevealerHoverStateFlag")
		// 		.removeClass("MosaicDOMRevealerHoverStateFlag");
	});