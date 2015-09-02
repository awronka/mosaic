$(document).ready(function(){
/*---------------
BUTTON FUNCTIONS
-----------------*/
	//Add function to reset state
	$('#MosaicToggle').click(function(){
		console.log('SENT: Grid Toggle');
		chrome.runtime.sendMessage({action: "toggleGrid"}, function(response) {
			console.log(response.status);
		});
	});
	$('#MosaicCommentsToggle').click(function(){
		console.log('SENT: Comment Visiblity Toggle');
		chrome.runtime.sendMessage({action: "toggleCommentVisibility"}, function(response) {
			console.log(response.status);
		});
	});
	$('#MosaicDeleteComments').click(function(){
		console.log('SENT: Delete All Comments');
		chrome.runtime.sendMessage({action: "deleteAllComments"}, function(response) {
			console.log(response.status);
		});
	});
});