//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
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
    speechArticles = document.getElementsByTagName("article");

//JS created elements go here.

//H3 that shows up in the sidebar beneath the speech button that currently changes when the user clicks the "Donate" button.
var sideNavHeading = document.createElement("h3");
  document.getElementById("SideNav").appendChild(sideNavHeading);

//Calculate the oldest and most recent speeches on the page, and save them to a variable to be used when the user clicks on the Author nav buttons.
var oldestSpeech = speechesArray[0].year,
    newestSpeech = speechesArray[0].year;;

for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldestSpeech){
      oldestSpeech = speechesArray[i].year;
    }
    if(speechesArray[i].year > newestSpeech){
      newestSpeech = speechesArray[i].year;
    }
  }


//This code executes when the user clicks the "Donate" button.
document.getElementById('BtnDonate').addEventListener('click', function(){

//Call the custom reset function (found at the end of this document).
  resetDonationSideNav();


//Find out from the user how much money they'd like to donate.
  amountToBeDonated = window.prompt("How much would you like to donate?");

//Display different messages in the sideNavHeading depending on how much the user chooses to donate.
  if(amountToBeDonated < 100 && amountToBeDonated !== null && amountToBeDonated > 0) {
      var sideNavHeadingText = document.createTextNode("Thank you for your donation of $" + amountToBeDonated + ".");

      sideNavHeading.appendChild(sideNavHeadingText);
  }
  else if (amountToBeDonated >= 100 && amountToBeDonated !== null) {
      var sideNavHeadingText = document.createTextNode("Thank you for your very generous donation!");

      sideNavHeading.appendChild(sideNavHeadingText);

  //Change the heading and article titles to red.
      sideNavHeading.setAttribute("style", "color:red");

      for(i=0; i < speechArticles.length; i++){
        document.getElementsByTagName("article")[i].className += "generous-donation";
      }   
  }
  else {
    document.getElementById("ConsoleDisplay").innerHTML = "Please enter a valid amount.";
  }

});


//Code in here executes when the user clicks the "Churchill" button.
document.getElementById('BtnChurchill').addEventListener('click', function(){

//Write a message to the console display giving information about this speech.
  document.getElementById("ConsoleDisplay").innerHTML = 'This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year + '. <br>';

//Check to see if year is BCE or not.
  if(speechesArray[0].yearIsBCE === true){
    document.getElementById("ConsoleDisplay").innerHTML += 'This speech took place before the common era. <br>';
  }else{
    document.getElementById("ConsoleDisplay").innerHTML += 'This speech took place during the common era. <br>';
  }

//Check to see if this speech is the oldest or newest on the page.
  if(speechesArray[0].year === oldestSpeech){
    document.getElementById("ConsoleDisplay").innerHTML += 'This is the oldest speech on the page. <br>';
  }
  if(speechesArray[0].year === newestSpeech){
    document.getElementById("ConsoleDisplay").innerHTML += 'This is the most recent speech on the page. <br>';
  }
});


//Code in here executes when the user clicks the "Ghandi" button.
document.getElementById('BtnGhandi').addEventListener('click', function(){

//Write a message to the console display giving information about this speech.
  document.getElementById("ConsoleDisplay").innerHTML = 'This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year + '. <br>';

//Check to see if year is BCE or not.
  if(speechesArray[1].yearIsBCE === true){
    document.getElementById("ConsoleDisplay").innerHTML += 'This speech took place before the common era. <br>';
  }else{
    document.getElementById("ConsoleDisplay").innerHTML += 'This speech took place during the common era. <br>';
  }

  if(speechesArray[1].year === oldestSpeech){
    document.getElementById("ConsoleDisplay").innerHTML += 'This is the oldest speech on the page. <br>';
  }
  if(speechesArray[1].year === newestSpeech){
    document.getElementById("ConsoleDisplay").innerHTML += 'This is the most recent speech on the page. <br>';
  }
});


//Code in here executes when the user clicks the "Demosthenes" button.
document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  
//Write a message to the console display giving information about this speech.  
  document.getElementById("ConsoleDisplay").innerHTML = 'This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year + '. <br>';

  if(speechesArray[2].yearIsBCE === true){
    document.getElementById("ConsoleDisplay").innerHTML += 'This speech took place before the common era. <br>';
  }else{
    document.getElementById("ConsoleDisplay").innerHTML += 'This speech took place during the common era. <br>';
  }

//Check to see if this speech is the oldest or newest on the page.
  if(speechesArray[2].year === oldestSpeech){
    document.getElementById("ConsoleDisplay").innerHTML += 'This is the oldest speech on the page. <br>';
  }
  if(speechesArray[2].year === newestSpeech){
    document.getElementById("ConsoleDisplay").innerHTML += 'This is the most recent speech on the page. <br>';
  }
});



//Function that affects the SideNav area after the "Donate" button is clicked. Clears the sideNavHeading and ConsoleDisplay in case there was anything there. Resets colors back to their default.
function resetDonationSideNav() {   
  while (sideNavHeading.hasChildNodes()) {
      sideNavHeading.removeChild(sideNavHeading.firstChild);
  }
  
  sideNavHeading.setAttribute("style", "color:white");
  
  document.getElementById("ConsoleDisplay").innerHTML = "";

  for(i=0; i < speechArticles.length; i++){
    if (document.getElementsByTagName("article")[i].classList.contains("generous-donation")){
          document.getElementsByTagName("article")[i].classList.remove("generous-donation");
    }
  } 
}
