/*
IE8 can't handle the AddEventListener, so it's been replaced by attachEvent. Also had to change "click" to "onclick".

*/

//Speech metadata object constructor
function Speech(speechAuthor, yearDelivered, beforeBCE) {
	this.speechAuthor = speechAuthor;
	this.yearDelivered = yearDelivered;
	this.beforeBCE = beforeBCE;
}

//Array of speech metadata, including author, year and boolean for bce
var greatestSpeech = [
	new Speech("Winston Churchill", 1940, false),
	new Speech("Ghandi", 1942, false),
	new Speech("Demosthenes", 342, true)
];

//Calculate the number of years between Ghandi's speech and Churchill's.
var ghandiYear = 1942;
var churchillYear = 1940;
var yearsBetweenSpeeches = ghandiYear - churchillYear;

console.log("Ghandi's speech and Churchill's speech are " + yearsBetweenSpeeches + " years apart.");


document.getElementById('BtnDonate').attachEvent('onclick', function(){
  //Code in here executes when the user clicks the "Donate" button.

  	console.log("There are " + greatestSpeech.length + " speeches on the page.");
});

document.getElementById('BtnChurchill').attachEvent('onclick', function(){
  //Code in here executes when the user clicks the "Churchill" button.

  	console.log("This speech was written by " + greatestSpeech[0].speechAuthor + " in " + greatestSpeech[0].yearDelivered + ". It is " + greatestSpeech[0].beforeBCE + " that this year is B.C.E.");
});

document.getElementById('BtnGhandi').attachEvent('onclick', function(){
  //Code in here executes when the user clicks the "Ghandi" button.

  	console.log("This speech was written by " + greatestSpeech[1].speechAuthor + " in " + greatestSpeech[1].yearDelivered + ". It is " + greatestSpeech[1].beforeBCE + " that this year is B.C.E.");
});

document.getElementById('BtnDemosthenes').attachEvent('onclick', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.

  	console.log("This speech was written by " + greatestSpeech[2].speechAuthor + " in " + greatestSpeech[2].yearDelivered + ". It is " + greatestSpeech[2].beforeBCE + " that this year is B.C.E.");
});

