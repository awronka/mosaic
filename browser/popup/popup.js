$(document).ready(function(){
	//Add function to reset state
	$('#MosaicToggle').click(function(){
			console.log('Sending Grid Toggle');
			chrome.runtime.sendMessage({action: "toggleGrid"}, function(response) {
				console.log(response.status);
			});
	});
});