$( document ).ready(function() {
	var speechTitles = $(".main-content h2"),
		speeches = $("div.speech");

	$( speeches ).hide();

	$("div.fixed-container")
			.css({
				"z-index" : "-1",
				"top" : "50"
			});

	$( speechTitles ).click(function() {
		var speechDiv = $(this).closest("article").find("div.speech");

		$(speechDiv).slideToggle(1000);
		
	});



});



