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
		'a { \
			background-color: rgba(24, 24, 200, .1); \
			outline: 1px solid rgba(30, 30, 200, .2); \
		}',
		1);
	style.sheet.insertRule(
		'.MosaicDOMRevealerHoverState { \
			outline: 2px solid rgba(24, 24, 24, .8); \
		}',
		2);
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
			font-family: Helvetica, Arial, Sans-Serif; \
			outline: none; \
		}',
		3);
	style.sheet.insertRule(
		'.MosaicDOMRevealerEventState { \
			background-color: rgba(200, 24, 24, .8); \
			outline: 1px solid rgba(200, 30, 30, .8); \
		}',
		4);
	style.sheet.insertRule(
		'.MosaicDOMRevealerCommentFlag { \
			position: absolute; \
			z-index: 10000; \
			width: 200px; \
			outline: none; \
			background-color: rgba(255, 255, 255, 1); \
			box-shadow: 0px 4px 24px rgba(24, 24, 24, .2); \
			font: none; \
			text-align: left; \
			zoom: 1; \
		}',
		5);
	style.sheet.insertRule(
		'.MosaicDOMRevealerCommentFlag * { \
			display: block; \
			flex: none; \
			margin: 0px; \
			padding: 0px; \
			border: 0px; \
			outline: none; \
			line-height: normal; \
			font-size: 8px; \
			font-weight: normal; \
			font-family: Helvetica, Arial, Sans-Serif; \
			text-transform: uppercase; \
			font-smoothing: antialiased; \
			color: black; \
			opacity: 1; \
			max-height: none; \
			min-height: none; \
			max-width: none; \
			min-width: none; \
		}',
		6);
	style.sheet.insertRule(
		'.MosaicDOMRevealerCommentFlag ol { \
			padding-left: 4px; \
			list-style-type: none; \
		}',
		7);
	style.sheet.insertRule(
		'.MosaicDOMRevealerCommentFlag li { \
			padding-top: 3px; \
			padding-bottom: 3px; \
		}',
		8);
	style.sheet.insertRule(
		'*, :after, :before { \
			box-sizing: initial;\
		}',
		9);
	style.sheet.insertRule(
		'.MosaicDOMRevealerCommentFlag input { \
			float: left; \
			width: 148px; \
			max-width: 148px; \
			height: 14px; \
			border-top: 1px dashed rgba(30,30,200,.2); \
			padding-left: 4px; \
		}',
		10);
	style.sheet.insertRule(
		'.MosaicDOMRevealerCommentFlag button { \
			float: left; \
			padding: 4px; \
			padding-left: 8px; \
			padding-right: 8px; \
			margin: 0; \
			margin-top: 1px; \
			width: auto; \
			height: 14px; \
			text-align: center; \
			background-color: white; \
			outline: 1px dashed rgba(30, 30, 200, .2); \
		}',
		11);
	style.sheet.insertRule(
		'.MosaicDOMRevealerCommentFlag button:hover { \
			background-color: #222222; \
			color: white; \
			cursor: crosshair; \
		}',
		12);
}