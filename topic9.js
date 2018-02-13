document.getElementById("div1").addEventListener("transitionend", divTransition);

function divTransition() {
    this.innerHTML = "Transition Complete";
    this.style.backgroundColor = "red";
}


var x = document.getElementById("div2");
function divAnimate() {
    
    //this.style.backgroundColor = "green";
	    x.style.WebkitAnimation = "animatediv 4s 1"; // Code for Chrome, Safari and Opera
		x.style.animation = "animatediv 4s 1";       // Standard syntax

}

// Code for Chrome, Safari and Opera
x.addEventListener("webkitAnimationStart", myStartFunction);
x.addEventListener("webkitAnimationEnd", myEndFunction);

function myStartFunction() {
    this.innerHTML = "Started";
	this.style.backgroundColor = "orange";
	alert("Animation Started");
}



function myEndFunction() {
    this.innerHTML = "Ended";
    this.style.backgroundColor = "red";
	alert("Animation End");
}

document.getElementById("myFrame").addEventListener("load", onloadExample);

function onloadExample() {
    document.getElementById("demo2").innerHTML = "Iframe is loaded.";
}

