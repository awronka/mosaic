var overlay_id = 'MosaicDOMRevealer';
var style = document.getElementById(overlay_id);
// var cssSheet = require("css/overlay.css");

if (style) {
	// If our style element exists when button is clicked, remove it
	document.head.removeChild(document.getElementById(overlay_id));
} else {
	style = document.createElement('style');
	style.setAttribute('id',overlay_id);
	document.head.appendChild(style);
	style.sheet.insertRule(
		'div, section, header, main, nav, footer, aside, span, h1, h2, h3, h4, h5, h6, p, ul, li, td, tr, table, tbody, img, a  { \
			background-color: rgba(250, 250, 250, .2); \
			outline: 1px dashed rgba(30, 30, 30, .2); \
		}',
		0);
	style.sheet.insertRule(
		'.MosaicDOMRevealerHoverState { \
			outline: 2px solid rgba(24, 24, 24, .8); \
		}',
		1);
	style.sheet.insertRule(
		'.MosaicDOMRevealerHoverStateFlag { \
			position: absolute; \
			z-index: 10000; \
			width: auto; \
			padding: 4px; \
			background-color: rgba(24, 24, 24, .5); \
			color: white; \
			font-size: 8px; \
			font-weight: bold; \
			text-align: left; \
		}',
		2);
	style.sheet.insertRule(
		'.MosaicDOMRevealerEventState { \
			background-color: rgba(200, 24, 24, .8); \
		}',
		3);
}