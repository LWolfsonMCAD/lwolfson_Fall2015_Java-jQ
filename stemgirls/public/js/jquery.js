$( document ).ready(function() {
	var
		roleModels = $("article.roleModel"),
		references = $("div.references"),
		roleModelBios = $("div.roleModelBio"),
		fieldListChoices = $("div.fieldList"),
		bioSection = $("section#roleModelBiographies"),
		roleModelNames,
		bioDivID,
		bioDiv,
		idName,
		previousBioDiv
	;


//Override default styles
	$('head').append('<link href="css/jquery.css" rel="stylesheet" type="text/css" />');

	$("section#roleModelFields div").removeClass("noJS");

	$("div.fieldList a").hover(function() {
		$(this).toggleClass("jQueryHover");
	});

	//$( bioSection ).height("100%");

	$( bioSection ).find("div.bioDiv").addClass("inactiveBio");


	$( roleModelBios )
		.append("<button class='closeBio'>Close Biography</button>")
		.add( references )
		.hide();


//Display the H3 elements that correspond with the field chosen.
	$( fieldListChoices ).on('click', 'a', function() {
		var 
			idName = $(this).data("divid"),
			currentBioDiv = $("div#" + idName),
			previousBioDiv = $("#roleModelBiographies div.current"),
			roleModelNames = $(currentBioDiv).find("article h3"),
			previousActiveField = $(fieldListChoices).find("a.activeField");

		$(previousActiveField).toggleClass("activeField");

		$(this).toggleClass("activeField");

		$(previousBioDiv)
				.toggleClass("current")
				.toggleClass("inactiveBio");

		$(currentBioDiv)
				.toggleClass("inactiveBio")
				.toggleClass("current");


	//Show the chosen woman's bio
		$( roleModelNames ).click(function() {
			$( roleModelNames ).not( $(this) ).hide();

			$(this)
				.next("div.roleModelBio")
				.fadeIn(1000);

			$( references ).show();
		});

		$("button.closeBio").click(function() {
			$(this).closest("div.roleModelBio").hide();

			$( references ).hide();

			$( roleModelNames ).show();
		});

	});


});










