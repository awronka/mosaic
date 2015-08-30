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
	chrome.tabs.executeScript(tab.id, {file: "browser/set-css.js"});
	chrome.tabs.executeScript(tab.id, {file: "browser/event-outlines.js"});
	chrome.tabs.executeScript(tab.id, {file: "browser/hover.js"});
	chrome.tabs.executeScript(tab.id, {file: "browser/name-flags.js"});
	chrome.tabs.executeScript(tab.id, {file: "browser/icon.js"});
	// chrome.browserAction.setPopup({popup: 'browser/popup.html'});
	// updateIcon();
});

// // Update Icon on Tab Change - Cant use onActivated, need to store status on a tab.id
// chrome.tabs.onActivated.addListener(function () {
// 	chrome.tabs.executeScript(tab.id, {file: "browser/icon.js"});
// 	// updateIcon();
// });



/*---------------
BREAKDOWN
1- activate on first click
2- following clicks opens menu
3- from menu are a few actions, one of which is to reset all
----------------*/