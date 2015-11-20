var
		churchillSpeech = {
	      'author': 'Churchill',
	      'year': 1940,
	      'yearIsBCE': false,
	      'authorAge': '66'
	    },
	    ghandiSpeech = {
	      'author': 'Ghandi',
	      'year': 1942,
	      'yearIsBCE': false,
	      'authorAge': '73'
	    },
	    demosthenesSpeech = {
	      'author': 'Demosthenes',
	      'year': 342,
	      'yearIsBCE': true,
	      'authorAge': '42'
	    },
	    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
	    donatePrompt,
	    amountToBeDonated
	;


// function displayBCEString (yearIsBCE) {
//   if(yearIsBCE === true){
//       return ("This speech took place before the common era. <br>");
//   }else{
//       return ("This speech took place during the common era. <br>"); 
//   }
// }


 
// function getButtonId(btn) {
//     var clickedItem = $( btn ).attr("id");

//         switch (clickedItem) {
//           case "BtnChurchill":
//               i = 0;
//               break;

//           case "BtnGhandi":
//               i = 1;
//               break;

//           case "BtnDemosthenes":
//               i = 2;
//               break;

//           case "BtnDonate" : 
//               donationDisplay(); 
//               break;

//           default:
//               break;
//         }

//       if (clickedItem === "BtnDonate") {
//         var consoleDisplay = $('#ConsoleDisplay');
//         while (consoleDisplay.hasChildNodes()){
//             consoleDisplay.removeChild(consoleDisplay.firstChild);
//         }
//       }
//       else {
//         $('#ConsoleDisplay').HTML() += displayBCEString(speechesArray[i].yearIsBCE);

//         $('#ConsoleDisplay').HTML() += getOldestOrYoungestString(speechesArray[i].year);

//         clearDonationDisplay();
//       }


//     }
//     btn.stopPropagation();
// }

// function getOldestOrYoungestString (speechYear) {
//   var oldestSpeech = speechesArray[0].year,
//       newestSpeech = speechesArray[0].year;

//   for(var i = 0; i < speechesArray.length; i++){
//     if(speechesArray[i].year < oldestSpeech){
//         oldestSpeech = speechesArray[i].year;
//     }
//     if(speechesArray[i].year > newestSpeech){
//         newestSpeech = speechesArray[i].year;
//     }
//   }

//   if(speechYear === oldestSpeech){
//       return ("This is the oldest speech on the page.<br>");
//   }
//   else if(speechYear === newestSpeech){
//       return ("This is the most recent speech on the page.<br>");
//   }
//   else {
//       return ("This is not the oldest or most recent speech on the page.<br>");
//   }
// }

$( document ).ready(function() {
	var 
		speechTitles = $(".main-content h2"),
		speeches = $("div.speech"),
		sideNav = $("#SideNav"),
		speechArticles = $(".main-content article");
		comparisonSpeech = $(speechesArray).get(0).year.toString();

//Set up style if jQuery is enabled...add PowerTip stylesheet, hide speeches, change SideNav position.
	$('head').append('<link href="css/jquery.powertip-light.min.css" rel="stylesheet" type="text/css" />');

	$( speeches ).add(".author, .date").hide();

	$("div.fixed-container")
			// .css({
			// 	"z-index" : "-1",
			// 	"top" : "50"
			// });
			.removeAttr( 'style' );

	console.log(comparisonSpeech);

	$( "a", sideNav ).click(function() {
		var button = $(this).attr("id");

		console.log(button);
	});


// function getOldestOrYoungestString (speechYear) {
//   var oldestSpeech = speechesArray[0].year,
//       newestSpeech = speechesArray[0].year;

//   for(var i = 0; i < speechesArray.length; i++){
//     if(speechesArray[i].year < oldestSpeech){
//         oldestSpeech = speechesArray[i].year;
//     }
//     if(speechesArray[i].year > newestSpeech){
//         newestSpeech = speechesArray[i].year;
//     }
//   }

//   if(speechYear === oldestSpeech){
//       return ("This is the oldest speech on the page.<br>");
//   }
//   else if(speechYear === newestSpeech){
//       return ("This is the most recent speech on the page.<br>");
//   }
//   else {
//       return ("This is not the oldest or most recent speech on the page.<br>");
//   }
// }

 	// $( sideNav ).click(function() {
 	// 	var btn = $(this);

 	// 	getButtonId(btn);
 	// });

//Display information about each speech when user hovers over it.

	$(".info")
			.powerTip({
			    placement: 'e',
			    smartPlacement: true
			})
			.mouseenter(function() {
				var chosenSpeech = $(this).closest("article").attr("id");

				$( this )
					.data(
						'powertip', function() {
							if(chosenSpeech == "Churchill") {

							}


							speechAuthor = $( "article#" + chosenSpeech ).find(".author").text(),
							speechYear = $( "article#" + chosenSpeech ).find(".date").text(),
							infoText = "This speech was written by " + speechAuthor + " on " + speechYear;

							return infoText;
						}
					);
			});
	;

	$( speechTitles ).click(function() {
		var speechDiv = $(this).closest("article").find("div.speech");

		$(speechDiv).slideToggle(600);

		
	});



});

//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
// var 
//     churchillSpeech = {
//       'author': 'Churchill',
//       'year': 1940,
//       'yearIsBCE': false,
//       'authorAge': '66'
//     },
//     ghandiSpeech = {
//       'author': 'Ghandi',
//       'year': 1942,
//       'yearIsBCE': false,
//       'authorAge': '73'
//     },
//     demosthenesSpeech = {
//       'author': 'Demosthenes',
//       'year': 342,
//       'yearIsBCE': true,
//       'authorAge': '42'
//     },
//     speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
//     donatePrompt,
//     amountToBeDonated,
//     speechArticles = document.getElementsByTagName("article")
//   ;

// //Elements created with JS
//   var sideNavHeading = document.createElement("h3");
//   document.getElementById("SideNav").appendChild(sideNavHeading);


// //Custom functions.
// function getAuthorAndYearString (currentSpeech) {
//   var speechAuthor = currentSpeech.author,
//       speechYear = currentSpeech.year; 
  
//   return ("This speech was written by " + speechAuthor + " in " + speechYear + ". </br>"); 
// }

// function displayBCEString (yearIsBCE) {
//   if(yearIsBCE === true){
//       return ("This speech took place before the common era. <br>");
//   }else{
//       return ("This speech took place during the common era. <br>"); 
//   }
// }

// function getOldestOrYoungestString (speechYear) {
//   var oldestSpeech = speechesArray[0].year,
//       newestSpeech = speechesArray[0].year;

//   for(var i = 0; i < speechesArray.length; i++){
//     if(speechesArray[i].year < oldestSpeech){
//         oldestSpeech = speechesArray[i].year;
//     }
//     if(speechesArray[i].year > newestSpeech){
//         newestSpeech = speechesArray[i].year;
//     }
//   }

//   if(speechYear === oldestSpeech){
//       return ("This is the oldest speech on the page.<br>");
//   }
//   else if(speechYear === newestSpeech){
//       return ("This is the most recent speech on the page.<br>");
//   }
//   else {
//       return ("This is not the oldest or most recent speech on the page.<br>");
//   }
// }


// function donationDisplay () {

//   clearDonationDisplay();

//   amountToBeDonated = window.prompt("How much would you like to donate?");

// //Display different messages in the sideNavHeading depending on how much the user chooses to donate.
//   if(amountToBeDonated < 100 && amountToBeDonated !== null && amountToBeDonated > 0) {
//       var sideNavHeadingText = document.createTextNode("Thank you for your donation of $" + amountToBeDonated + ".");

//       sideNavHeading.appendChild(sideNavHeadingText);

//       for(i=0; i < speechArticles.length; i++){
//         if (document.getElementsByTagName("article")[i].classList.contains("generous-donation")){
//               document.getElementsByTagName("article")[i].classList.remove("generous-donation");
//         }
//       }

//       sideNavHeading.setAttribute("style", "color:white");
//   }
//   else if (amountToBeDonated >= 100 && amountToBeDonated !== null) {
//       var sideNavHeadingText = document.createTextNode("Thank you for your very generous donation!");

//       sideNavHeading.appendChild(sideNavHeadingText);

//       sideNavHeading.setAttribute("style", "color:red");

//       for(i=0; i < speechArticles.length; i++){
//         document.getElementsByTagName("article")[i].className += "generous-donation";
//       }   
//   }
//   else {
//     document.getElementById("ConsoleDisplay").innerHTML = "Please enter a valid amount.";
//   }
// }

// function clearDonationDisplay () {
//     if (typeof sideNavHeading !== 'undefined') { 
//         while (sideNavHeading.hasChildNodes()) {
//             sideNavHeading.removeChild(sideNavHeading.firstChild);
//         }
//     }
// }


// //Add event listeners to all of the author nav buttons.
// var sideNav = document.querySelector("#SideNav");
// sideNav.addEventListener("click", getButtonId, false);
 
// function getButtonId(btn) {
//     if (btn.target !== btn.currentTarget) {
//         var clickedItem = btn.target.id;

//         switch (clickedItem) {
//           case "BtnChurchill":
//               i = 0;
//               break;

//           case "BtnGhandi":
//               i = 1;
//               break;

//           case "BtnDemosthenes":
//               i = 2;
//               break;

//           case "BtnDonate" : 
//               donationDisplay(); 
//               break;

//           default:
//               break;
//         }

//       if (clickedItem === "BtnDonate") {
//         var consoleDisplay = document.getElementById('ConsoleDisplay');
//         while (consoleDisplay.hasChildNodes()){
//             consoleDisplay.removeChild(consoleDisplay.firstChild);
//         }
//       }
//       else {
//         document.getElementById('ConsoleDisplay').innerHTML = getAuthorAndYearString(speechesArray[i]);

//         document.getElementById('ConsoleDisplay').innerHTML += displayBCEString(speechesArray[i].yearIsBCE);

//         document.getElementById('ConsoleDisplay').innerHTML += getOldestOrYoungestString(speechesArray[i].year);

//         clearDonationDisplay();
//       }


//     }
//     btn.stopPropagation();
// }



