var scrollToTopButtons = document.getElementsByClassName("btnScrollToTop");

/*
These functions can be used throughout the page.
*/

function scrollToTopOfPage () {
     window.scrollTo (0,0);
}


for (var i = 0; i < scrollToTopButtons.length; i++) {
	scrollToTopButtons[i].addEventListener('click', function() {
 		
 		scrollToTopOfPage();

	});
}


