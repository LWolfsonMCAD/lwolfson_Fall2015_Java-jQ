//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var 
    churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt,
    amountToBeDonated,
    speechArticles = document.getElementsByTagName("article")
  ;

//Elements created with JS
  var sideNavHeading = document.createElement("h3");
  document.getElementById("SideNav").appendChild(sideNavHeading);


//Custom functions.
function getAuthorAndYearString (currentSpeech) {
  var speechAuthor = currentSpeech.author,
      speechYear = currentSpeech.year; 
  
  return ("This speech was written by " + speechAuthor + " in " + speechYear + ". </br>"); 
}

function displayBCEString (yearIsBCE) {
  if(yearIsBCE === true){
      return ("This speech took place before the common era. <br>");
  }else{
      return ("This speech took place during the common era. <br>"); 
  }
}

function getOldestOrYoungestString (speechYear) {
  var oldestSpeech = speechesArray[0].year,
      newestSpeech = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldestSpeech){
        oldestSpeech = speechesArray[i].year;
    }
    if(speechesArray[i].year > newestSpeech){
        newestSpeech = speechesArray[i].year;
    }
  }

  if(speechYear === oldestSpeech){
      return ("This is the oldest speech on the page.<br>");
  }
  else if(speechYear === newestSpeech){
      return ("This is the most recent speech on the page.<br>");
  }
  else {
      return ("This is not the oldest or most recent speech on the page.<br>");
  }
}


function donationDisplay () {

  clearDonationDisplay();

  amountToBeDonated = window.prompt("How much would you like to donate?");

//Display different messages in the sideNavHeading depending on how much the user chooses to donate.
  if(amountToBeDonated < 100 && amountToBeDonated !== null && amountToBeDonated > 0) {
      var sideNavHeadingText = document.createTextNode("Thank you for your donation of $" + amountToBeDonated + ".");

      sideNavHeading.appendChild(sideNavHeadingText);

      for(i=0; i < speechArticles.length; i++){
        if (document.getElementsByTagName("article")[i].classList.contains("generous-donation")){
              document.getElementsByTagName("article")[i].classList.remove("generous-donation");
        }
      }

      sideNavHeading.setAttribute("style", "color:white");
  }
  else if (amountToBeDonated >= 100 && amountToBeDonated !== null) {
      var sideNavHeadingText = document.createTextNode("Thank you for your very generous donation!");

      sideNavHeading.appendChild(sideNavHeadingText);

      sideNavHeading.setAttribute("style", "color:red");

      for(i=0; i < speechArticles.length; i++){
        document.getElementsByTagName("article")[i].className += "generous-donation";
      }   
  }
  else {
    document.getElementById("ConsoleDisplay").innerHTML = "Please enter a valid amount.";
  }
}

function clearDonationDisplay () {
    if (typeof sideNavHeading !== 'undefined') { 
        while (sideNavHeading.hasChildNodes()) {
            sideNavHeading.removeChild(sideNavHeading.firstChild);
        }
    }
}


//Add event listeners to all of the author nav buttons.
var sideNav = document.querySelector("#SideNav");
sideNav.addEventListener("click", getButtonId, false);
 
function getButtonId(btn) {
    if (btn.target !== btn.currentTarget) {
        var clickedItem = btn.target.id;

        switch (clickedItem) {
          case "BtnChurchill":
              i = 0;
              break;

          case "BtnGhandi":
              i = 1;
              break;

          case "BtnDemosthenes":
              i = 2;
              break;

          case "BtnDonate" : 
              donationDisplay(); 
              break;

          default:
              break;
        }

      if (clickedItem === "BtnDonate") {
        var consoleDisplay = document.getElementById('ConsoleDisplay');
        while (consoleDisplay.hasChildNodes()){
            consoleDisplay.removeChild(consoleDisplay.firstChild);
        }
      }
      else {
        document.getElementById('ConsoleDisplay').innerHTML = getAuthorAndYearString(speechesArray[i]);

        document.getElementById('ConsoleDisplay').innerHTML += displayBCEString(speechesArray[i].yearIsBCE);

        document.getElementById('ConsoleDisplay').innerHTML += getOldestOrYoungestString(speechesArray[i].year);

        clearDonationDisplay();
      }


    }
    btn.stopPropagation();
}

