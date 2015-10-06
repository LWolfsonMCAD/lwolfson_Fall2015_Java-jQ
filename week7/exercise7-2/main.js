//Add or remove newDivLook class based on the user clicking in the div.

document.getElementById("newFirstDiv").addEventListener('click', function(){
		if ( document.getElementById("newFirstDiv").className === "" ) {
		document.getElementById("newFirstDiv").className = "newDivLook";
		}
		else {
			document.getElementById("newFirstDiv").className = "";
		}
	});


