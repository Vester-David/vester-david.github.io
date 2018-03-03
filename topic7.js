// Manipulating CSS Class Properties Using JavaScript

// Change background color
function example1() {
	chosenColor = document.getElementById('myColor').value;
	console.log(chosenColor);
	document.body.style.backgroundColor = chosenColor;
	

}

function example2() {
		document.getElementById("example2").style.fontFamily = "'Great Vibes'";
		document.getElementById("example2").style.fontSize = "40px";
		document.getElementById("example2").style.color = "gold";
}

function example3() {
		document.getElementById("example3").className = "example3two";
		
		document.getElementById("example3").innerHTML = "Not a square";
		
}
