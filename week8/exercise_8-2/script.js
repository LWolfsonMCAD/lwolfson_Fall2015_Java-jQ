/*
This function takes user entered text and puts it into the 
movieQuoteDiv element, changing whatever text was in there.
*/

function changeMovieQuote () {
	var movieQuoteDiv = document.getElementById("movieQuoteDiv");
	var userFavoriteQuote = prompt("Please write your favorite movie quote.");
	
	movieQuoteDiv.innerHTML = userFavoriteQuote; //Using innerHTML for IE8 compatibility.

}

changeMovieQuote();