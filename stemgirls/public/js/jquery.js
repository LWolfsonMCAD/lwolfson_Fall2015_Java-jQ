// $( document ).ready(function() {
// 	var

// //Role Model Page variables	
// 		fieldListChoices = $("div.fieldList"),
// 		bios = $("div.bios"),
// 		roleModels = $("article.roleModel"),
// 		biographyDisplay = $("div#biographyDisplay"),
// 		roleModelBio = $("div.roleModelBio"),
// 		roleModelDivID,
// 		roleModelDiv,
// 		roleModelNames,
// 		roleModelReferences
// 	;


// //Override default styles
// 	$( biographyDisplay ).height("100%");

// 	$( "section#roleModelBiographies" ).hide();

// 	$( fieldListChoices )
// 		.removeClass("noJS")
// 		.find("a")
// 		.hover(function() {
// 			$(this).toggleClass("jQueryHover");
// 		});

// 	$( roleModelBio )
// 		.append("<button class='closeBio'>Close Biography</button>")
// 		.hide();


// //Display the H3 elements that correspond with the field chosen.
// 	$( fieldListChoices ).find("a").on('click', function() {


// 		// roleModelDivID = $(this).attr('href'),
// 		// roleModelDiv = $("div" + roleModelDivID),
// 		// roleModelNames = $( roleModelDiv ).find("article h3"),
// 		// roleModelReferences = $( roleModelDiv ).find("div.references");

// 		// $( biographyDisplay ).html(roleModelNames);

// 		// console.log( roleModelNames );



// //need to append clicked content to bioDisplay div and make sure it's only showing the proper names.		




// //Show the chosen woman's bio, along with section references.
// 		// $( roleModelNames ).click(function() {
// 		// 	$( roleModelNames ).not( $(this) ).hide();

// 		// 	$(this)
// 		// 		.next( roleModelBio )
// 		// 		.fadeIn(1000);

// 		// 	$( roleModelReferences ).show();
// 		// });

// 		// $("button.closeBio").click(function() {
// 		// 	$(this).closest( roleModelBio ).hide();

// 		// 	$( roleModelReferences ).hide();

// 		// 	$( roleModelNames ).show();
// 		// });


// 	});


// });


$( document ).ready(function() {
	var
		roleModels = $("article.roleModel"),
		references = $("div.references"),
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










