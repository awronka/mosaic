var getStatus = function() {
	if (document.getElementById('MosaicDOMRevealer') !== null) {
		// alert('TAB - grid active');
		return true;
	} else {
		// alert('TAB - grid NOT active');
		return false;
	}
}
// alert(getStatus());
result = getStatus();