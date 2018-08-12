// #4 Create an array of 5 numbers each with 2 decimals places
var numArray = [ 1.26, 3.08, 9.10, 21.11, 25.34 ];
//new array
var newNumArray = [];

//Loop through that number array
for (var i = numArray.length - 1; i >= 0; i--) {
	numArray[i]
//Round all numbers to the nearest whole integer
	var x = Math.round(numArray[i]);
	//add each to a new array
	newNumArray.push(x);

	console.log(newNumArray);
};

// #6 Create a function that produces 10 random numbers between 1 and 100, and add each number to another array of numbers.
var newNumbersArray2 = [];
function randomNumbers() {
  var y = Math.ceil( Math.random() * 100 );
  newNumbersArray2.push(y);
};
for (var i = 0; i < 10; i++) {
  randomNumbers();
};
console.log(newNumbersArray2);

// #7 Create a function that creates a few variables to store the whole date, the current hour, the current minute and the current second.
function newDate() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

   // #8 Inside the function, create a variable using concatination to produce the current time.
  var currentTime = hours + ":" + minutes + ":" + seconds;
  console.log(currentTime)

    // #9 Inside the function, create a few more variables to store the current month, day and year.
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear() - 2000;

   // #10 Inside the function, create a variable using concatination to produce the current date ex. 1/1/17.
  var currentDate = month + "/" + day + "/" + year;
  console.log(currentDate);
  // #11 Change your function to print this time and date onto your document.
  document.body.innerHTML = currentTime + " " + currentDate;
  // #12 Run this time/date function every second using the Set Timeout Method.
  setTimeout(function() {
    newDate();
  }, 1000)
}
newDate();



