$( document ).ready(function() {
//Display the recipe that corresponds with the selected button.

	$("ul#menu-main-menu li").click(function() {
		var idName = $("a", this).data("divid");
		var previousRecipe = $("#recipeDisplay div.currentRecipe");

		$(this)
				.css({opacity : 1.0})
				.addClass("activeButton")
				.queue(function() {
	    			$(this).siblings()
	    				.fadeTo("slow", 0.5)
	    				.removeClass("activeButton")
	    		}).dequeue();

		$(previousRecipe)
				.toggleClass("currentRecipe")
				.toggleClass("recipe");

		$("div#" + idName)
				.css({opacity : 0.0})
				.toggleClass("recipe")
				.toggleClass("currentRecipe")
				.animate({opacity : 1.0}, 1000);

	});


//Change color of the button that the user is hovering over.

	$("ul#menu-main-menu li").on("mouseenter mouseleave", function(event) {
			$(this)
				.toggleClass("currentButton");

	});

});

