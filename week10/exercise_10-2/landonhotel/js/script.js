

$( document ).ready(function() {

//The following script marks which restaurants in the list are veg-friendly for the Restaurant-To-Room page.
	var vegRestaurants = $("li[data-type='veg']");

	$(vegRestaurants).append("<span> (v)</span>");


//The following script creates a dynamic table of contents on the Specials page.
	var citiesWithSpecialsList = $("div.content h2");
	
	$("div.content h1").after(citiesWithSpecialsList);

	$(citiesWithSpecialsList).wrap("<a> </a>").addClass("citiesList");

	//$("div.content h1").after(citiesWithSpecials);

	//$()

});