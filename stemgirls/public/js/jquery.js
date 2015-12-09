$( document ).ready(function() {
	var
		mainNavDropDown = $("ul.main-navigation li.dropdown"),
		subNavigation = $("header .sub-navigation a"),
		roleModelBios = $("div.roleModelBio"),
		fieldListChoices = $("div.fieldList"),
		bioSection = $("section#roleModelBiographies"),
		roleModelInfoDiv = $("div.roleModelInfo"),
		roleModelNames,
		bioDivID,
		bioDiv,
		idName,
		previousBioDiv
	;


//Override default styles
	$("span#noJSBackToTop").hide();

	$( roleModelBios ).hide();

	$("section#roleModelFields div").add("ul.main-navigation li.dropdown").removeClass("noJS");

	$("div.fieldList a").hover(function() {
		$(this).toggleClass("jQueryHover");
	});

	$( bioSection )
			.find("div.bioDiv")
			.addClass("inactiveBio");

	$("section#roleModelBiographies div.placeholder").addClass("current");	

	$( roleModelInfoDiv ).prepend("<img src='images/closebox_small.png' alt='Close box icon' class='closebox'>").after("<button class='closeBio'>Close Biography</button>");


//Main navigation actions.
	$( mainNavDropDown ).on('mouseenter mouseleave', function() {
		$(this)
			.find("ul")
			.slideToggle(600);
	});

	$( subNavigation ).hover(function() {
		$(this).closest("li").toggleClass("subNavHover");
	});


//Display the H3 elements that correspond with the field chosen.
	$( fieldListChoices ).on('click', 'a', function() {
			idName = $(this).data("divid"),
			currentBioDiv = $("div#" + idName),
			previousBioDiv = $("#roleModelBiographies div.current"),
			roleModelNames = $( currentBioDiv ).find("article h3"),
			previousActiveField = $( fieldListChoices ).find("a.activeField");


			$(previousActiveField).toggleClass("activeField");

			$(this).toggleClass("activeField");

			$( previousBioDiv )
					.toggleClass("current")
					.toggleClass("inactiveBio");

			$( currentBioDiv )
					.toggleClass("inactiveBio")
					.toggleClass("current");


		//Show the chosen woman's bio
			$( roleModelNames ).click(function() {
				$( roleModelNames ).not( $(this) ).hide();

				$(this)
					.next("div.roleModelBio")
					.fadeIn(1000);
			});

			$("button.closeBio").add("img.closebox").click(function() {
				$(this).closest("div.roleModelBio").hide();

				$( roleModelNames ).show();
			});

	});


});










