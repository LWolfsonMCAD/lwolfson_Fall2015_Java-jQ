

$( document ).ready(function() {

    $("#quoteExplanation").hide();


//First time the button is clicked, highlight the quote and display the explanation div.

    $("#btnHighlightQuote").click(function() {
    	var hamletQuote = document.getElementById("hamletQuote");
    	var quoteExplanation = document.getElementById("quoteExplanation");
		
		$(hamletQuote).addClass("highlight");

		$(quoteExplanation).show();

    });

});