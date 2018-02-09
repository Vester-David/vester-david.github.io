// XMLHTTPRequest example
function example1() {
	var myRequest = new XMLHttpRequest();
	myRequest.onreadystatechange = function() {
		if (this.status == 200) {
			document.getElementById("example1").innerHTML = this.responseText;
		}
		
	};
	myRequest.open("GET", "loremipsum.txt", true);
	myRequest.send();

}

