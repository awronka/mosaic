// // Add Enabled/Disabled Event for Icon Change
// function updateIcon() {
// 	chrome.devtools.inspectedWindow.eval(function (resources){
// 		alert(resources);
// 	})
// 	// if (document.getElementById('MosaicDOMRevealer') !== null) {
// 	// 	chrome.browserAction.setIcon({path: "images/38-active.png"});
// 	// } else {
// 	// 	chrome.browserAction.setIcon({path: "images/38-inactive.png"});
// 	// }
// }

// Update OnClick
chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.executeScript(tab.id, {file: "node_modules/jquery/dist/jquery.min.js"});
	chrome.tabs.executeScript(tab.id, {file: "js/outlines.js"});
	chrome.tabs.executeScript(tab.id, {file: "js/hover.js"});
	chrome.tabs.executeScript(tab.id, {file: "js/name-flags.js"});
	chrome.tabs.executeScript(tab.id, {file: "js/icon.js"});
	// updateIcon();
});

// Update Icon on Tab Change - Cant use onActivated, need to store status on a tab.id
chrome.tabs.onActivated.addListener(function () {
	chrome.tabs.executeScript(tab.id, {file: "js/icon.js"});
	// updateIcon();
});