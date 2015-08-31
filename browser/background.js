/*---------------
BREAKDOWN
Managing state associated with each tab, we're going to change how the browser action and popup are interacted with
-----------------
1- Handle Messages
2- Store tab info
3- Make db calls
-----------------
Popup
-----------------
1- activate on first click
2- all clicks following the first opens popup
3- from menu are a few actions, one of which is to reset all
----------------*/

var MOSAICDATA = {};

var updatePageComments = function(tab){
	console.log('MOSAICDATA: ', MOSAICDATA);
	console.log('Tab URL: ', tab.url);
	MOSAICDATA[tab.url] = [];
	console.log('MOSAICDATA: ', MOSAICDATA);
}


// Upon tab switch
chrome.tabs.onActivated.addListener(function(event) {
	// Change Icon
	chrome.tabs.executeScript(event.id, {file: "browser/sense-state.js"}, function(result) {
		console.log('Mosaic Activate: ',result[0]); // Returns an array, in this case with a length of 1 because I specified the tab to inspect
		if (result[0] === true) { chrome.browserAction.setIcon({path: "images/38-active.png"});
		} else {
			chrome.browserAction.setIcon({path: "images/38-inactive.png"});
		}
	});
	// Make a GET for comments
	chrome.tabs.get(event.tabId, function(tab) {
		updatePageComments(tab);
	});
});

// Upon tab update
chrome.tabs.onUpdated.addListener(function(tabId, changedInfo, tab) {
	// Make a GET for comments
	updatePageComments(tab);
});

// Browser Action Listener
chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.browserAction.setPopup({popup: 'browser/popup/popup.html'});
	
});

// Messaging Listener
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		// Toggle Grid
		if (request.action === "toggleGrid") {
			// Run deactivating scripts
			chrome.tabs.getCurrent(function(tab){
				// Grids
				chrome.tabs.executeScript(tab, {file: "browser/revealers/set-mosaic-css.js"});
				chrome.tabs.executeScript(tab, {file: "browser/revealers/event-outlines.js"});
				chrome.tabs.executeScript(tab, {file: "browser/revealers/hover.js"});
				chrome.tabs.executeScript(tab, {file: "browser/revealers/remove-name-flags.js"});
				// Icon
				chrome.tabs.executeScript(tab, {file: "browser/sense-state.js"}, function(result){
					if (result[0]){ chrome.browserAction.setIcon({path: "images/38-active.png"});
					} else {
						chrome.browserAction.setIcon({path: "images/38-inactive.png"});
					}
				});
				// Upon Success, Reply
				sendResponse({status: "RECIEVED: Mosaic state toggled"});
			});
		}
		// Add Comment
		if (request.action === "addComment"){
			sendResponse({status: "RECIEVED: Comment Added"})
		}
	});









// local  = [
// 	tab.id = {
// 		MosaicState: false,
// 		page: [{
// 			url: String, 
// 			comments: [{
// 				path: String,
// 				comment: String,
// 				author: String
// 			}]
// 		}]
// 	}
// 	]