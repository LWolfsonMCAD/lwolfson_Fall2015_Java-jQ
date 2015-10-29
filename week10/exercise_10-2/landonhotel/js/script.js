

$( document ).ready(function() {

//The following script marks which restaurants in the list are veg-friendly for the Restaurant-To-Room page.
	var vegRestaurants = $("li[data-type='veg']");

	$(vegRestaurants).append("<span> (v)</span>");


//The following script creates a dynamic table of contents on the Specials page.
	//var citiesWithSpecialsList = $("div.content h2");

	var citiesList = $( "div.content h1" ).after( "<ul id='citiesWithSpecials'></ul>" );

	//var citiesWithSpecials = $("div.content h2").text();


	var cities = [];

	$("div.content h2").each(function() { 
		cities.push( $(this).text() ) 
	});

	$("#citiesWithSpecials").append(cities);

	// $.each(cities, function(index, item) {
	// 	$(cities[index]).wrap("<li><a> </a></li>");
	// });



	// $.each(citiesWithSpecials, function() {
	// 	$(this).wrap("<li><a> </a></li>");
	// });

	//console.log(citiesWithSpecials);

	// $("ul#citiesList").append(function() {
	// 	$.each(citiesWithSpecials, function() {
	// 		$(this).wrap("<li><a> </a></li>");
			
	// 		//console.log(citiesWithSpecials[index].html = value);

	// 		});
	// 	});


	//$(citiesWithSpecialsList).wrap("<a> </a>").addClass("citiesList");

	//$("div.content h1").after(citiesWithSpecials);

	//$()

});