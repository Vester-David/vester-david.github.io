// Manipulating CSS Class Properties Using JavaScript

// Change background color
function example1() {
	chosenColor = document.getElementById('myColor').value;
	console.log(chosenColor);
	document.body.style.transition = "background 3.0s linear 0s";
	document.body.style.backgroundColor = chosenColor;
	

}

function example2() {
		document.getElementById("example2").style.transition = "height 0.4s linear 0s";
		document.getElementById("example2").style.height = "70px";
}

function example3() {
		document.getElementById("example3").style.animation = "pong 3s linear infinite,spin 3s linear infinite";
		
		
}
function example3a() {
		myElement = document.getElementById("example3");
		
		if (myElement.style.webkitAnimationPlayState === 'running') {
			document.getElementById("example3").style.webkitAnimationPlayState = 'paused';
			document.getElementById("example3a").value = "Play animation";
		} else {
			document.getElementById("example3").style.webkitAnimationPlayState = 'running';
			document.getElementById("example3a").value = "Pause animation";
		}
		
		
}
