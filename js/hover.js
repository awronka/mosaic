var overlay_id = 'MosaicDOMRevealer';
var filterAttributes = function(tag) {
	// console.log(tag);
	if (tag === undefined || tag === "" || tag === 'MosaicDOMRevealerHoverState'){
		return false;
	} else {
		return true;
	}
}
$('body *').hover(
	function() {
		// Since passing variables back and forth is a bit weird, starting off just checking for the stylesheet adjustment
		if (document.getElementById(overlay_id)){
			// Get Attributes
			if ($(this).attr("class") !== undefined) var thisClass = $(this).attr("class").split(" ").filter(filterAttributes);
			if ($(this).attr("id") !== undefined) var thisId = $(this).attr("id").split(" ").filter(filterAttributes);

			// Construct Flag
			element = "<div id='MosaicDOMRevealerHoverStateFlag'>";
			if (thisId) element = element + "Id:" + thisId;
			if (thisId && thisClass) element = element + " ";
			if (thisClass && thisClass != "") element = element + "Classes:" + thisClass;
			element = element + "</div>"

			$(this).append(element);

			// Mosaic
			$(this).addClass('MosaicDOMRevealerHoverState');
		} else {
			$('#MosaicDOMRevealerHoverStateFlag').remove();
		}
	},
	function() {
	});