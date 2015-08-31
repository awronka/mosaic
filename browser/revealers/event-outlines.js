var overlay_id = 'MosaicDOMRevealer';
var style = document.getElementById(overlay_id);

var checkForEvent = function(el){
	var regexp = new RegExp("^on");
	// For each of the element's properties
	for (var property in el){
		//Check to see if they start with "on"
		if(regexp.test(property)){
			// If so, check to see if there is an attribute with this property name and if it has a value
			if($(el).attr(property) !== null && $(el).attr(property) !== undefined){
				// If it has a value, check to see if it already has a event state class appended
				if (!$(el).hasClass('MosaicDOMRevealerEventState')) {
					console.log($(el).attr(property));
					// If not, add class!
					$(el).addClass('MosaicDOMRevealerEventState');
				}
				break;
			}
		}
	}
}

// If the Mosaic style element exists, lets add styles for elements that have javascript events
if (style) {
	$('body *').each(function(index, el) {
		checkForEvent(el);
	});
} else {
	$('.MosaicDOMRevealerEventState').removeClass('MosaicDOMRevealerEventState');
}