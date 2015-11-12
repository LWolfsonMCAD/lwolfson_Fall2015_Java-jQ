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
	var currentDiv = $("#hero div.current");
	//var nextDiv;
	var nextDiv = ($(currentDiv).next().length > 0) ? $(currentDiv).next() : $("#hero div:first");

	// if ( $(currentDiv).next().length > 0)  {
	// 		nextDiv = $(currentDiv).next();

		//$(nextDiv).addClass("next");
		


		$( currentDiv )
		    .queue(function() {
		      $( this ).toggleClass( "current" ).toggleClass("previous").dequeue();
		    })
		    .queue(function() {
		    	$( nextDiv ).toggleClass( "current" ).removeClass( "previous" ).dequeue();
		    });

		// $( nextDiv )
		// 	.css("opacity", 0.0)
		// 	.queue(function() {
		// 		$( this ).toggleClass( "current" ).dequeue;
		// 	})
		//     // .queue(function() {	
		//     //   $( this ).next().toggleClass( "current" ).removeClass("previous").dequeue();
		//     });	

		//}

	// else {

	// 	nextDiv = $("#hero div:first");
			
	// 	$(nextDiv).addClass("current");


		// $( currentDiv )
  //   		.fadeToggle(2000)
		//     .queue(function() {
		//       $( this ).toggleClass( "current" ).dequeue();
		//     })
		//     .queue(function() {	
		//       $( this ).next().toggleClass( "current" ).removeClass("next").dequeue();
		//     });
	}

	// $(nextDiv).addClass("next");

	// $( currentDiv )
 //    		.fadeToggle(2000)
	// 	    .queue(function() {
	// 	      $( this ).toggleClass( "current" ).dequeue();
	// 	    })
	// 	    .queue(function() {	
	// 	      $( this ).next().toggleClass( "current" ).removeClass("next").dequeue();
	// 	    });

// 	// var heroDivs = $("#hero div");
	// var currentDiv = $("#hero div.current");
	// var nextDiv = ($(currentDiv).next().length > 0) ? $(currentDiv).next() : $("#hero div:first");


	// $(currentDiv).fadeOut(4000);
	// $(nextDiv).addClass("next");
	// function() {


	// if ( $(currentDiv).next().length === 0 ) {
	// 	nextDiv = $("#hero div:first");

	// 	$(nextDiv).addClass("current");
	// }
	// else {
	// 	nextDiv = $(currentDiv).next();
	// }




	// if ($(nextDiv) === $("#hero div:first")) {
	// 	$(nextDiv).addClass("current");
	// }
	// else {
	// 	$(nextDiv).addClass("next");
	// }
	// var firstDiv = ($(currentDiv).next().length = 0) ? $("#hero div:first") : false;

	// var nextDiv;

	// if ( $(currentDiv).next().length > 0) {
	// 	var nextDiv = $(currentDiv).next();

	// }

	// if ( $(currentDiv).next().length = 0 ) {
	// 	var nextDiv = $("#hero div:first");

	// 	$(nextDiv).toggleClass("current");
	// }

	// $(currentDiv).delay(2000).fadeOut(4000);
	// if ( ($(nextDiv)) === ($("hero div:first")) ) {
	// 	$(this).toggleClass("current");
	// }
	// else {


	// if ( $(currentDiv).next().length === 0 ) {
	// 	nextDiv = $("#hero div:first");

	// 	$(nextDiv).addClass("current").toggleClass("next");

		
	// }
	// else {
	// 	nextDiv = $(currentDiv).next();
	// }

	// }



	

// 	if ( ($(nextDiv) === ($("#hero div:first")) ) {
// 	$(nextDiv).toggleClass("current");
// }
// else {
// 	$(nextDiv).addClass("next");
// }

	
//}

// function changeDivClasses() {
// 	var currentDiv = $("#hero div.current");
// 	var nextDiv = ($(currentDiv).next().length > 0) ? $(currentDiv).next() : $("#hero div:first");

// 	$(currentDiv).removeClass("current").addClass("previous");
// 	$(nextDiv).addClass("current").removeClass("previous");	
// }

$( document ).ready(function() {
/*******************************
Homepage
********************************/
	//Cycle through images in #hero div.

	setInterval(heroImageLoop, 3000);

	//heroImageLoop(setInterval(heroImageLoop, 3000));

	// var heroDivs = $("#hero div");
	// var heroDivsArray = $.makeArray(heroDivs)
	// var i = 0;

	// while (i < heroDivsArray.length) {

	// 	if ( $(heroDivsArray[i]).hasClass("current") ) {
	// 		$(heroDivsArray[i]).fadeOut(4000)
	// 	    	   .next()
	// 	    	   .addClass("previous");

	// 	    break;
	// 	}	

	// 	i++;
	// }

	// while (i < heroDivsArray.length) {

	// 	if ( $(heroDivsArray[i]).hasClass("previous") ) {
	// 		$(heroDivsArray[i]).addClass("current")
	// 	    	   				.next()
	// 	    	   				.addClass("previous");
	// 	}		

	// 	i++;
	// }
	
	// $("#hero div.current").delay(2000).fadeOut(5000);

	//$("#hero div.current").next().addClass("next").delay(8000).fadeOut(4000);




	//heroImageLoop();

	//changeDivClasses();

			//$("#hero div.current").delay(8000).fadeOut(4000);

			// var heroDivs = $("#hero div");
			// 	heroDivsArray = $.makeArray(heroDivs),
			// 	i = 0;


			//setTimeout(heroImageLoop, 4000);

			




			


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



