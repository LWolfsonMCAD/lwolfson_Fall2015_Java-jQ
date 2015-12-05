
$( document ).ready(function() {
	var
		roleModels = $("article.roleModel"),
		references = $("section.references"),
		roleModelBios = $("div.roleModelBio"),
		fieldListChoices = $("div.fieldList"),
		bioSection = $("section#roleModelBiographies"),
		roleModelNames,
		bioDivID,
		bioDiv
	;


//Override default styles
	$( bioSection ).hide();

	$("section#roleModelFields div").removeClass("noJS");

	$("div.fieldList a").hover(function() {
		$(this).toggleClass("jQueryHover");
	});

	$("section#roleModelBiographies").height("100%");

	$( roleModelBios )
		.append("<button class='closeBio'>Close Biography</button>")
		.add( references )
		.hide();


	// $("section#roleModelBiographies").css("min-height", "300px");





//Display the H3 elements that correspond with the field chosen.
	$( fieldListChoices ).find("a").click(function() {
		bioDivID = $(this).attr("href"),
		bioDiv = $("div" + bioDivID),
		roleModelNames = $( bioDiv ).find("article h3");

		$( bioSection ).show();

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










