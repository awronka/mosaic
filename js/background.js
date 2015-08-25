// Add Enabled/Disabled Event
var enabled = false;
function updateIcon() {
	if (!enabled) {
		chrome.browserAction.setIcon({path: "images/mosaic-19-active.png"});
		enabled = true;

	} else {
		chrome.browserAction.setIcon({path: "images/mosaic-19-inactive.png"});
		enabled = false;
	}
}
chrome.browserAction.onClicked.addListener(function(tab) {
	updateIcon();
	chrome.tabs.executeScript(tab.id, {file: "node_modules/jquery/dist/jquery.min.js"});
	chrome.tabs.executeScript(tab.id, {file: "js/outlines.js"});
	chrome.tabs.executeScript(tab.id, {file: "js/hover.js"});
	chrome.tabs.executeScript(tab.id, {file:"js/name-flags.js"});
});


