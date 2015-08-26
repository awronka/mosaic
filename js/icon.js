// Add Enabled/Disabled Event for Icon Change
function updateIcon() {
	if (document.getElementById('MosaicDOMRevealer') !== null) {
		// console.log('NO MOSAIC WHEN CALLED: Set icon to active')
		// chrome.browserAction.setIcon({path: "images/38-active.png"});
	} else {
		// console.log('MOSAIC WHEN CALLED: Set icon to inactive')
		// chrome.browserAction.setIcon({path: "images/38-inactive.png"});
	}
}

updateIcon();