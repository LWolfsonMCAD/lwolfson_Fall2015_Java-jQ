function heroImageLoop() {
	var currentDiv = $("#hero div.current");
	var nextDiv = ($(currentDiv).next().length > 0) ? $(currentDiv).next() : $("#hero div:first");

	$( currentDiv )
	    .queue(function() {
	      $( this ).toggleClass( "current" ).toggleClass( "previous" ).dequeue();
	    })
	    .queue(function() {
	    	$( nextDiv ).css({ opacity: 0.0 }).toggleClass( "current" ).animate({ opacity: 1.0 }, 1000, function() {
	    		$( currentDiv ).removeClass( "previous" );
	    	}).dequeue();
	    });
}

//Solution from the video (I had the setInterval right, and my variables work...the video solution just does away with the .queue methods).

// function heroImageLoop() {
// 	var currentDiv = $("#hero div.current");
// 	var nextDiv = $(currentDiv).next();

// 	if (nextDiv.length === 0) {
// 		nextDiv = $("#hero div:first");
// 	}

// 	currentDiv.removeClass("current").addClass("previous");
// 	nextDiv.css({opacity: 0.0}).addClass("current")
// 			.animate({opacity: 1.0}, 1000,
// 					function() {
// 						currentDiv.removeClass("previous");
// 					});
// }



$( document ).ready(function() {
/*******************************
Homepage
********************************/
	//Cycle through images in #hero div.

	setInterval(heroImageLoop, 3000);


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



