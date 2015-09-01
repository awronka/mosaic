/*---------------
MOSAIC DATA
-----------------*/
var MOSAICDATA = {};

var dbUrl = "http://localhost:3333/"

var updatePageComments = function(tab){
	if (!MOSAICDATA[tab.url]) MOSAICDATA[tab.url] = [];
	// Get Page
	$.get(dbUrl + 'api/page', {url: tab.url})
		.done(function(data) {
			// console.log('RETURNED DATA: ', data);
			MOSAICDATA[tab.url] = data.comments;
		})
	console.log('MOSAICDATA: ', MOSAICDATA);
}

/*---------------
TAB SWITCHING
-----------------*/
chrome.tabs.onActivated.addListener(function(event) {
	// Change Icon
	chrome.tabs.executeScript(event.id, {file: "browser/sense-state.js"}, function(result) {
		// console.log('Mosaic Activate: ',result[0]); // Returns an array, in this case with a length of 1 because I specified the tab to inspect
		if (result[0] === true) { chrome.browserAction.setIcon({path: "images/38-active.png"});
		} else {
			chrome.browserAction.setIcon({path: "images/38-inactive.png"});
		}
	});
	chrome.tabs.get(event.tabId, function(tab) {
		// Make a GET for comments
		updatePageComments(tab);
	});
});

/*---------------
TAB UPDATES
-----------------*/
chrome.tabs.onUpdated.addListener(function(tabId, changedInfo, tab) {
	// Make a GET for comments
	updatePageComments(tab);
});


/*---------------
BROWSER ACTION
-----------------*/
chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.browserAction.setPopup({popup: 'browser/popup/popup.html'});	
});

/*---------------
MESSAGES LISTENER
-----------------*/
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {

		/*---------------
		ML - GET MOSAIC DATA
		-----------------*/
		if (request.action === "getMosaicData") {
			console.log("GOT REQUEST FOR MOSAIC DATA")
			// Get Tab
			chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
				// Make Get
				$.get(dbUrl + 'api/page', {url: tabs[0].url})
					.done(function(data) {
						console.log('RETURNED DATA: ', data);
						// Send Back Information
						sendResponse({ status: "Mosaic Data Sent", data: data });
					});
			});
		}

		/*---------------
		ML - TOGGLE GRID
		-----------------*/
		if (request.action === "toggleGrid") {
			// Run deactivating scripts
			chrome.tabs.getCurrent(function(tab){
				// Comments
				chrome.tabs.executeScript(tab, {file: "browser/commenting/comment-visibility.js"});
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

		/*---------------
		ML - ADD COMMENT
		-----------------*/
		if (request.action === "addComment") {
			// chrome.tabs.getCurrent(function(tab){
			chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
				var url = tabs[0].url,
					path = request.path,
					input = request.input;

				$.post(dbUrl + 'api/comment', {url: url, path: path, input: input})
					.done(function(data){
						console.log('COMMENT POSTED: ', data);
					})

				sendResponse({status: "RECIEVED: Comment Added"})
			});
		}

		/*---------------
		ML - SHOW/HIDE COMMENTS
		-----------------*/
		if (request.action === "toggleCommentVisibility") {
			// Get Current Tab
			chrome.tabs.getCurrent(function(tab){
				// Run Comment Visiblity Content-Script
				chrome.tabs.executeScript(tab, {file: "browser/commenting/comment-visibility.js"}, function(result){
					sendResponse({status: "RECIEVED: Comments Visibility Changed", visibility: result});
				});
			});
		}

		/*---------------
		ML - DELETE PAGE COMMENTS
		-----------------*/
		if (request.action === "deleteAllComments") {
			chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
				var page = tabs[0].url;
				$.ajax({
					url: dbUrl + 'api/page/comments',
					type: 'DELETE',
					data: {page: page}
				}).done(function(response){
					console.log('COMMENTS DELETED: ', response);
					chrome.tabs.getCurrent(function(tab){
						// Run Comment Visiblity Content-Script
						chrome.tabs.executeScript(tab, {file: "browser/commenting/comment-visibility.js"}, function(result){
							sendResponse({status: "RECIEVED: Comments Visibility Changed", visibility: result});
						});
					});
				})
				sendResponse({status: "RECIEVED: Comments Deleted"})
			});
		}

		// Lets chrome know that async work is being done and to keep the listener going till a sendResponse happens
		return true;
	});