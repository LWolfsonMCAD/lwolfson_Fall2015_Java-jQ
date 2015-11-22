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


/****************************************
Set up if user enables jQuery/js
*****************************************/
	$('head').append('<link href="css/jquery.powertip-light.min.css" rel="stylesheet" type="text/css" />');

	$( speeches ).add(".author, .date").hide();


/****************************************
Sticky div for side nav buttons.
*****************************************/
	function sticky_relocate() {
	    var window_top = $(window).scrollTop();
	    var div_top = $('#sticky-anchor').offset().top;
	    if (window_top > div_top) {
	        $("div.fixed-container").addClass('sticky');
	    } else {
	        $("div.fixed-container").removeClass('sticky');
	    }
	}

	$(function () {
	    $(window).scroll(sticky_relocate);
	    sticky_relocate();
	});



/****************************************
Side Nav button click event handlers
*****************************************/

	$( "a", sideNav ).click(function() {
		var button = $(this).attr("id"),
			chosenButton;

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

          default:
              break;
        }

        chosenButton = $( speechesArray ).get(i);

//Oldest and Newest Speech handlers
        if (chosenButton.year === oldestSpeech) {
        	$("#ConsoleDisplay").html("<p>This speech is the oldest speech on the page.</p>");
        }
        else if (chosenButton.year === newestSpeech) {
        	$("#ConsoleDisplay").html("<p>This speech is the newest speech on the page.</p>");
        }
        else {
        	$("#ConsoleDisplay").html("<p>This speech is neither the oldest or the newest speech on the page.</p>");
        }
        

//Before or during common era handlers
        if (chosenButton.yearIsBCE) {
        	$("#ConsoleDisplay p").append("<br>This speech took place before the common era.");
        }

        if (!chosenButton.yearIsBCE) {
        	$("#ConsoleDisplay p").append("<br>This speech took place during the common era.");
        }

		
	});


//Donate Button handler/function

	$("#BtnDonate").click(function() {
			amountToBeDonated = window.prompt("How much would you like to donate?");


		if(amountToBeDonated < 100 && amountToBeDonated !== null && amountToBeDonated > 0) {

		  	$("#ConsoleDisplay")
		  		.removeClass("generous-donation")
		  		.empty()
		  		.append("Thank you for your donation of $" + amountToBeDonated + ".");

		  	$( speechTitles )
      			.removeClass("generous-donation");
		}

     	else if (amountToBeDonated >= 100 && amountToBeDonated !== null) {
      		
      		$("#ConsoleDisplay")
      			.empty()
      			.append("Thank you for your generous donation!")
      			.toggleClass("generous-donation");

      		$( speechTitles )
      			.toggleClass("generous-donation");

      	}

		  else {
		    $("#ConsoleDisplay")
		    	.empty()
		    	.append("Please enter a valid amount.")
		    	.removeClass("generous-donation");

		    $( speechTitles )
      			.removeClass("generous-donation");
		  }
	});



/****************************************
Popup over speech titles
*****************************************/

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


/****************************************
Expand speeches when title is clicked
*****************************************/

	$( speechTitles ).add(".closeSpeech").click(function() {
		var speechDiv = $(this).closest("article").find("div.speech");

		$(speechDiv).slideToggle(600);

		
	});


});










