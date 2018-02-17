// XMLHTTPRequest example
function example1() {
	var myRequest = new XMLHttpRequest();
	myRequest.onreadystatechange = function() {
		// must use readystate AND status. Just using status throws errors when parsing JSON
		if (this.readyState == 4 && this.status == 200) {
			// output raw JSON response
			document.getElementById("example1").innerHTML = this.responseText;
			// parse JSON string to Javascript object
			var myData = JSON.parse(this.responseText);
			// output Javascript object to HTML
			document.getElementById("example2").innerHTML = 'Title: <strong>' + myData.title + 
									'</strong><br><a href=' + myData.url + '><img src=' + 
									myData.thumbnailUrl + '/><a/><br>Click on Thumbnail to See Full Image';
		
		}	
	};
	myRequest.open("GET", "https://jsonplaceholder.typicode.com/photos/3", true);
	myRequest.send();
}