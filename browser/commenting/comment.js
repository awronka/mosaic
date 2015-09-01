var dbUrl = "http://localhost:3333/"
var addComment = function(tab){
	$.post(dbUrl + 'api/page', {url: tab.url, comment: 'something'})
		.done(function(data) {
			MOSAICDATA[tab.url] = data.comments;
		})

	console.log('MOSAICDATA: ', MOSAICDATA);
}




/*

var altCMap = {18: false, 67: false};

// Comment key press event
$(this).keydown(function(e) {
	console.log('hey');
	if(e.keyCode in altCMap) {
		altCMap[e.keyCode] = true;
		if (altCMap[18] && altCMap[67]) {
			console.log('comment to be added!');
		}
	}
}).keyup(function(e) {
	if (e.keyCode in altCMap) {
		altCMap[e.keyCode] = false;
	}
});


$(this).keypress(function(e) {
	console.log('hey');
	// if(e.keyCode in altCMap) {
		// altCMap[e.keyCode] = true;
		// if (e ==altCMap[67]) {
		// 	console.log('comment to be added!');
		// }
	// }
});

*/