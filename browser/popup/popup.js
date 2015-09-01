$(document).ready(function(){
/*---------------
BUTTON FUNCTIONS
-----------------*/
	//Add function to reset state
	$('#MosaicToggle').click(function(){
		console.log('SEND: Grid Toggle');
		chrome.runtime.sendMessage({action: "toggleGrid"}, function(response) {
			console.log(response.status);
		});
	});
	$('#MosaicCommentsToggle').click(function(){
		console.log('SEND: Comment Visiblity Toggle');
		chrome.runtime.sendMessage({action: "toggleCommentVisibility"}, function(response){
			console.log(response.status);
		});
	});
});