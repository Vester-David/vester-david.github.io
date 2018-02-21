// DOM Manipulation example - create list
function example1() {
	
	// create a new unordered list parent element
	var myList = document.createElement('ul');
	
	// assign id attribute to list element
	myList.setAttribute('id','myList');
	
	// append this list element to existing div in HTML DOM
	document.getElementById('example1').appendChild(myList);
	
	// create child list item element
	var myListItem = document.createElement('li');
	
	// assign id attribute to list item element
	myListItem.setAttribute('id','myListItem');
	
		
	// append list item child to UL parent
	myList.appendChild(myListItem);
	
	// add text to list item child 
	var myData = document.createTextNode("Example 1");
	
	myListItem.appendChild(myData);
	
	
	

}

// add items to list
function example2() {
	
	var  myListItem2 = document.createElement('li');
	myListItem2.setAttribute('id','myListItem2');
	myData2 = document.createTextNode("Example 2");
	myListItem2.appendChild(myData2);
	
	document.getElementById('myList').appendChild(myListItem2);
	

}

// insert items before other items
function example3() {
	
	var  myListItem3 = document.createElement('li');
	myListItem3.setAttribute('id','myListItem3');
	myData3 = document.createTextNode("Example 3 - Insert Before");
	myListItem3.appendChild(myData3);
	
	var myList = document.getElementById('myList');
	myList.insertBefore(myListItem3, myList.childNodes[1]);
	
}

// delete items from DOM
function example4() {
	var myList = document.getElementById('myList');
	myList.removeChild(myList.childNodes[1]);
	
}