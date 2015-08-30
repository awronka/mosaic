var overlay_id = 'MosaicDOMRevealer';
var style = document.getElementById(overlay_id);

// If the Mosaic style element exists, lets add styles for elements that have javascript events
if (style) {
	$('*').each(function(index, el) {
		// if($._data($(el), "events")) {
		if($(el).attr('onClick')){
			console.log(el);
			$(el).addClass('MosaicDOMRevealerEventState');
		}
	});
} else {
	$('.MosaicDOMRevealerEventState').removeClass('MosaicDOMRevealerEventState');
}