//Speech metadata object constructor
function Speech(author, year, beforeBCE) {
	this.author = author;
	this.year = year;
	this.beforeBCE = beforeBCE;
}

var greatestSpeech = [
	new Speech("Winston Churchill", 1940, false),
	new Speech("Ghandi", 1942, false),
	new Speech("Demosthenes", -342, true),
];



// var greatestSpeech = [
// 	new Speech("Winston Churchill", new Date("June 18, 1940"), false),
// 	new Speech("Ghandi", new Date("August 8, 1942"), false),
// 	new Speech("Demosthenes", -342, true),
// ];

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
});