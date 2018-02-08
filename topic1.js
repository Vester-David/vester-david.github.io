var cities = [];
    cities[0] = "New York City";
	cities[1] = "Los Angeles";
	cities[2] = "Chicago";
	cities[3] = "Houston"; 
	cities[4] = "Philadelphia"; 
	cities[5] = "Phoneix"; 
	cities[6] = "San Antonio"; 
	cities[7] = "San Diego"; 
	cities[8] = "Dallas"; 
	cities[9] = "San Jose"; 


// For Loop
function ListCities() {
var tenlargestcities = [
    "New York City", "Los Angeles", "Chicago", "Houston", "Philadelphia", "Phoenix", "San Antonio", "San Diego", "Dallas", "San Jose"];
var element = document.getElementById('cities');
    
for ( var i = 0; i < tenlargestcities.length; i++) 
{
    var city = tenlargestcities[i];
    element.innerHTML += '<li>' + city + '</li>';
    }
}

// While Loop Counter
function WhileCounter() 
{
    var number = document.getElementById('usernumber');
    var counter = number.value;
    output = document.getElementById('whilecounter');
    
    do {
        var i = 0;
        output.innerHTML += i;
        i++;
        
    } while (i < number);
}

// Conditional Statements - Guess Numbers
var random = Math.floor(Math.random() * 100) + 1;
console.log(random);
function Guess()
{
  var guess = document.getElementById("userguess").value;
  var output = document.getElementById("guess");
  var compare = guess;
  if (guess < random) {
      document.getElementById("guess").innerHTML = 'Guess Higher';
  } else if (guess > random ) {
      document.getElementById("guess").innerHTML = 'Guess Lower';
  } else {
      document.getElementById("guess").innerHTML = 'You Got It!';
  }
    
    
}

// Associative arrays
function cityGuess() {
    input = document.getElementById("cityinput").value - 1;

    
    document.getElementById("cityoutput").innerHTML = cities[input];
}
