var dbUrl = "http://localhost:3333/"
var addComment = function(tab){
	$.post(dbUrl + 'api/page', {url: tab.url, comment: 'something'})
		.done(function(data) {
			MOSAICDATA[tab.url] = data.comments;
		})
}