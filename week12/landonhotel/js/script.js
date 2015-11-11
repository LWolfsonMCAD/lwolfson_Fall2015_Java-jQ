// function fadeOutCurrentPhoto(currentDiv) {
// 		//$(currentDiv).fadeOut(2000);
// 		//$(currentDiv).toggleClass("current").addClass("previous");
		
// 		setInterval(function () {
// 			$(currentDiv).fadeOut(2000);
// 			$(currentDiv).removeClass("current").addClass("previous");

// 		}, 2000, newPrevious(currentDiv));
	
		
		
// 	}

// function newPrevious() {

// 	$(this).next().addClass("current");

// }

function heroImageLoop() {
	// var heroDivs = $("#hero div");
	var currentDiv = $(".current");
	var nextDiv = ($(currentDiv).next().length > 0) ? $(currentDiv).next() : $("#hero div:first");


	$(currentDiv).fadeOut(4000);
	$(nextDiv).fadeIn(4000);

	$(currentDiv).removeClass("current").addClass("previous");
	$(nextDiv).addClass("current").removeClass("previous");


}

$( document ).ready(function() {
/*******************************
Homepage
********************************/
	//Cycle through images in #hero div.

	$("#hero div.current").fadeOut(4000);

	// var heroDivs = $("#hero div");
	// 	heroDivsArray = $.makeArray(heroDivs),
	// 	i = 0;
	heroImageLoop();

	setInterval(heroImageLoop, 4000);




	


	// while (i <= heroDivsArray.length) {
	// 	console.log( $(heroDivsArray[i]).addClass("yay") );
	// 	i++;
	// }

	// $.each(heroDivs, function() {
	// 	if ( $(this).hasClass("current") ) {
	// 		var currentDiv = $(this);
			
	// 		fadeOutCurrentPhoto(currentDiv);

	// 	}

	// 	if ( $(this).hasClass("previous") ) {
	// 		$(this).next("div").addClass("current");
	// 	}

	// });

	// $.each(heroDivs, function() {
	// 	if ( $(this).hasClass("previous") ) {
	// 		$(this).next("div").addClass("current");
	// 	}
	// });

	// $.each(heroDivs, function() {
	// 	var currentDiv = $(this);

	// 	if ($(this).hasClass("current")) {

	// 		$(currentDiv).fadeOut(2000);

	// 		//fadeOutCurrentPhoto(currentDiv);

	// 		// $(currentDiv).next().addClass("current");

	// 	}

	//});

	// a div needs to have the .current class
	// when it does, it should display for 2 seconds, then fade 
	// then the next div will be on top
	// repeat



// #hero div {
//     position:absolute;
//     z-index: 0;
// }
// #hero div.previous {
//     z-index: 1;
// }
// #hero div.current {
//     z-index: 2;
// }


/*******************************
Meetings and Events Page
********************************/
	//Change the appearance of the div that the user is hovering over. 

	$("div.content").on("mouseenter mouseleave", "div.event", function(event) {
			$(this).toggleClass("highlightedEvent");

			$("li", this).toggleClass("highlightedEvent");
	});	

/*******************************
Restaurant-To-Room page
********************************/
	//The following script marks which restaurants in the list are veg-friendly for the Restaurant-To-Room page.
	var vegRestaurants = $("li[data-type='veg']");

	$(vegRestaurants).append("<span> (v)</span>");



/*******************************
Specials Page
********************************/
	//The following script creates a dynamic table of contents on the Specials page.

	var 
		citiesList = $( "div.content h1" ).after( "<ul id='citiesWithSpecials'></ul>" ),

		cities = [];

	// Populate the cities array to generate the list of cities that have specials, and give IDs to the H2 elements that the list will ink to.
	$("div.content h2").each(function() { 
		cities.push( $(this).text() )
	});


	$("div.content h2").each(function(i) {
		$(this).attr("id", "city" + i);
	});


	//Wrap the cities array text in list item and anchor tags.

	$.each(cities, function(index, value) {
		var link = "#city" + index;
		$("#citiesWithSpecials").append('<li><a href="'+link+'">' + value + ' </a></li>');
	});


});



