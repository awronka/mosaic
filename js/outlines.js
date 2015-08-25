var overlay_id = 'MosaicDOMRevealer';
var style = document.getElementById(overlay_id);
// var cssSheet = require("css/overlay.css");

if (style) {
	document.head.removeChild(document.getElementById(overlay_id));
} else {
	style = document.createElement('style');
	style.setAttribute('id',overlay_id);
	document.head.appendChild(style);
	style.sheet.insertRule(
		'div, section, header, main, nav, footer, aside, span, h1, h2, h3, h4, h5, h6, p, ul, li, td, tr, table, tbody, img, a  { \
			background-color: rgba(250, 250, 250, .2); \
			outline: 1px solid rgba(30, 30, 30, .2); \
		}',
		0);
	style.sheet.insertRule(
		'.MosaicDOMRevealerHoverState { \
			outline: 2px solid rgba(240, 24, 24, .4); \
		}',
		1);
	style.sheet.insertRule(
		'.MosaicDOMRevealerHoverStateFlag { \
			position: absolute; \
			z-index: 10000; \
			width: auto; \
			padding: 4px; \
			background-color: rgba(240, 24, 24, 1); \
			color: white; \
			font-size: 10px; \
			font-weight: bold; \
		}'
		,
		2);
}