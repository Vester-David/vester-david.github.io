// Creating an object with an object method
var car = {
	make:"Suzuki",
	model:"Samurai",
	year:"1988",
	color:"White",
	type:"Tintop",
	
};

// reading object properties by name and value.
function example1() {
	document.getElementById("example1").innerHTML = "Hey that's a nice " + car.color + " " + car.year + " " + car.make + " " + car.model + " " + car.type + " you have! Did you get it at the toilet store?";

}


// Loop through properties
function example2() {
	var output = "";
	var i;
	for (i in car) {
		output += car[i] + " ";
	}
	document.getElementById("example2").innerHTML = output;

}

// Call object method
function example3() {
	car.makeModel = function() {
		return "Make and Model: " + this.make + " " + this.model;
		}
	document.getElementById("example3").innerHTML = car.makeModel();
}

// Object constructors
function example4() {
	function coolCar(make, model, year, color) {
		
		this.make = make;
		this.model = model;
		this.year = year;
		this.color = color;
		
	}
	
	var yourcar = new coolCar("Ford", "Mustang", "2018", "Red");
	
document.getElementById("example4").innerHTML = "Your car is a cool " + yourcar.color + " color!";
}

