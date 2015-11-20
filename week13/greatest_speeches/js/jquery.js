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
	    yearsArray = [churchillSpeech.year, ghandiSpeech.year, demosthenesSpeech.year],
	    donatePrompt,
	    amountToBeDonated
	;


$( document ).ready(function() {
	var 
		speechTitles = $(".main-content h2"),
		speeches = $("div.speech"),
		sideNav = $("#SideNav"),
		speechArticles = $(".main-content article"),
		oldestSpeech = Math.min.apply(Math, yearsArray),
		newestSpeech = Math.max.apply(Math, yearsArray);


//Set up style if jQuery is enabled...add PowerTip stylesheet, hide speeches, change SideNav position and styles so users can hover/click on speech titles.
	$('head').append('<link href="css/jquery.powertip-light.min.css" rel="stylesheet" type="text/css" />');

	$( speeches ).add(".author, .date").hide();

	$("div.fixed-container").addClass("jq_fixed-container").removeClass("fixed-container");

	$( sideNav ).addClass("jq_side-nav").removeClass("side-nav");


//Button functions to display more information about the speeches.

	$( "a", sideNav ).click(function() {
		var button = $(this).attr("id"),
			chosenButtonYear;

		switch (button) {
          case "BtnChurchill":
              i = 0;
              break;

          case "BtnGhandi":
              i = 1;
              break;

          case "BtnDemosthenes":
              i = 2;
              break;

          // case "BtnDonate" : 
          //     donationDisplay(); 
          //     break;

          default:
              break;
        }

        chosenButtonYear = $( speechesArray ).get(i).year;

    //Determine if the speech is oldest or newest on the page, and display a message that corresponds with the answer.

        if (chosenButtonYear === oldestSpeech) {
        	$("#ConsoleDisplay").html("<p>This speech is the oldest speech on the page.</p>");
        }
        else if (chosenButtonYear === newestSpeech) {
        	$("#ConsoleDisplay").html("<p>This speech is the newest speech on the page.</p>");
        }
        else {
        	$("#ConsoleDisplay").html("<p>This speech is neither the oldest or the newest speech on the page.</p>");
        }
        
		
	});


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
							speechAuthor = $( "article#" + chosenSpeech ).find(".author").text(),
							speechYear = $( "article#" + chosenSpeech ).find(".date").text(),
							infoText = "This speech was written by " + speechAuthor + " on " + speechYear + "<br>Click to read the speech";

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


// //Elements created with JS
//   var sideNavHeading = document.createElement("h3");
//   document.getElementById("SideNav").appendChild(sideNavHeading);



// function displayBCEString (yearIsBCE) {
//   if(yearIsBCE === true){
//       return ("This speech took place before the common era. <br>");
//   }else{
//       return ("This speech took place during the common era. <br>"); 
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



