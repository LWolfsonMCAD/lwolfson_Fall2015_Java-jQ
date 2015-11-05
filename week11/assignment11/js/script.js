$( document ).ready(function() {

//Add the attached icon image before the text in each LI element in the main navigation
	$("#menu li").prepend("<img src='img/icon.png' class='icon'>");



//Clicking on the H1 element in the header changes the background color of the header DIV
	$("#header h1").click(function() {

		$("#header").toggleClass("highlighted");

	});



//Change the text color of the first LI element in one of the sub-lists in the sidebar. Right now it happens with the first sidebar content div.

	$("li#sidebar_content_1 li:first-child a").css('color', 'red');



//Move the position of the even “numbered” LI elements in one of the sub-lists in the sidebar to the right by 5 pixels. This is set to happen on the second sidebar content div.

	$("#sidebar_content_2").find("li:even").css("margin-left", "5px");



//Clicking on one of the post titles in the main content area replaces the content of the content DIV (with the ID of “content”) with content you specify. Currently this happens with the second H2 and it's following div.

	$("div.post h2").click(function() {

		var 
			text = $(this).text(),
			selectText = "Vivamus Varius Justo Sit Amet";

		if (text === selectText) {
			$(this).next("div.entry").replaceWith("<p>This is some new text that has replaced the text that was here because you clicked on this div's header</p>");
		 }

	});



//Clicking on one of the H2 elements in the sidebar toggles visibility of the list below it. Right now this operates on both H2s.

	$("#sidebar h2").click(function() {

		$(this).next().toggleClass("hidden");

	});

});



