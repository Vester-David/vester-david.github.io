function checkStorage(){
	if(localStorage.getItem('example1') != "visited") {
		document.getElementById('example1').innerHTML = "This is your first time here. Refresh to see if I remember you next time.";
		localStorage.setItem('example1', 'visited');
	} else {
		document.getElementById('example1').innerHTML = "Welcome back!";
	}
	
}

// Local Storage example
function example1() {
	
	document.getElementById('example1').innerHTML = "Ok, see yah later! Refresh to start over";
	localStorage.setItem('example1', 'reset');
	

}

// Local Storage example
function example2() {
	
	var myData = ["red", "yellow", "blue"];
	//console.log(myData);
	localStorage.setItem('primaryColors', JSON.stringify(myData));
	//localStorage.setItem('primaryColors', myData);
	
	var myResult = localStorage.getItem('primaryColors');
	var myJSO = JSON.parse(myResult);
	//console.log(myJSO);
	document.getElementById("example2").innerHTML = myJSO;
	

}