$( document ).ready(function() {
	$("a").click(function() {
		$(this).addClass("purpleBackground");
	});

	$("div.post h2").click(function() {
		$(this).hide();
	});

});

