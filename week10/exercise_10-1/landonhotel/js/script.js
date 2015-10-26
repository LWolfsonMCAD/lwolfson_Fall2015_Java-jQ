//The following script marks which restaurants in the list are veg-friendly.

$( document ).ready(function() {
	var vegRestaurants = $("li[data-type='veg']");

	$(vegRestaurants).append("<span> (v)</span>");

});