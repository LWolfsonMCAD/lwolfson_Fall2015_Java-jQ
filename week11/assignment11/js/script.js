$( document ).ready(function() {

//Add the attached icon image before the text in each LI element in the main navigation
	$("#menu li").prepend("<img src='img/icon.png' class='icon'>");

//Clicking on the H1 element in the header changes the background color of the header DIV
	$("#header h1").click(function() {

		$("#header").toggleClass("highlighted");
	});


//Change the text color of the first LI element in one of the sub-lists in the sidebar

	$("li#sidebar_content_1 li:first-child a").css('color', 'red');


//Move the position of the even “numbered” LI elements in one of the sub-lists in the sidebar to the right by 5 pixels



//Clicking on one of the post titles in the main content area replaces the content of the content DIV (with the ID of “content”) with content you specify

	$("div.post h2").click(function() {

	});


//Clicking on one of the H2 elements in the sidebar toggles visibility of the list below it

	$("#sidebar h2").click(function() {
		$("#sidebar li > ul").toggleClass("hidden");
	});

});



