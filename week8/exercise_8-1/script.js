var scrollToTopButtons = document.getElementsByClassName("btnScrollToTop");

/*
These functions can be used throughout the page.
*/

//Scroll to the top of the page.
function scrollToTopOfPage () {
     window.scrollTo (0,0);
}



//Whenever one of the "Scroll to Top" buttons are clicked, call the function to scroll up the window.
for (var i = 0; i < scrollToTopButtons.length; i++) {
	scrollToTopButtons[i].addEventListener('click', function() {
 		
 		scrollToTopOfPage();

	});
}


