JSONstring = '{ "make":"Toyota", "model":"Tacoma", "color":"Forest Green", "type":"TRD PreRunner"}';
var myCar = JSON.parse(JSONstring);

// convert JSON string into object with parse
function example1() {
	
	
	document.getElementById("example1").innerHTML = "Where did you get that " + myCar.color + " " + myCar.make + " " + myCar.model + " " + myCar.type + "?";

}


// Convert object into JSON string with stringify
function example2() {
	var newJSONstring = JSON.stringify(myCar);
	
	document.getElementById("example2").innerHTML = newJSONstring;

}