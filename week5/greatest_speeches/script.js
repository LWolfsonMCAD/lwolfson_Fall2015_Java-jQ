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
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech];

// Get user's name in order to personalize the experience. If they do not give one, or hit "cancel" then set user's name to "User.""
var User = window.prompt("What is your name?");

if(User !== "" && User !== null){
    console.log("Hi " + User + "!");
}
else {
  console.log("Okay, I'll just call you User");
  var User = "User";
}


document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button. Check to see who the user's favorite author is, then display how old the orator was when the speech was delivered.
  var favoriteAuthor = prompt(User + " who is your favorite author?");

  if(favoriteAuthor === null) {
    console.log("Please click the 'Donate' button again and enter a name.");
  }
  else {
    switch(favoriteAuthor.toLowerCase()) {
      case ("churchill") :
        console.log(speechesArray[0].author + " was " + speechesArray[0].authorAge + " during this speech.");
        break;

      case ("ghandi") :
        console.log(speechesArray[1].author + " was " + speechesArray[1].authorAge + " during this speech.");
        break;

      case ("demosthenes") :
        console.log(speechesArray[2].author + " was " + speechesArray[2].authorAge + " during this speech.");
        break;

      default:
        console.log("Please check the spelling of the name you entered and try again.");
        break;
    }
  }
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.

    console.log("This speech was written by " + speechesArray[0].author + " in " +  speechesArray[0].year + ".");

    if(speechesArray[0].yearIsBCE === true) {
      console.log("This speech took place before the common era.");
    }
    else {
      console.log("This speech took place during the common era.");
    }

  // Compare this speech to the others to determine if it's the oldest or most recent speech on the page.   
    if(speechesArray[0].year > speechesArray[1].year && speechesArray[0].year > speechesArray[2].year) {
      console.log("This is the most recent speech on the page.");
    }
    
    if(speechesArray[0].year < speechesArray[1].year && speechesArray[0].year < speechesArray[2].year) {
      console.log("This is the oldest speech on the page.");
    }

});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.

  console.log("This speech was written by " + speechesArray[1].author + " in " +  speechesArray[1].year + ".");

    if(speechesArray[1].yearIsBCE === true) {
      console.log("This speech took place before the common era.");
    }
    else {
      console.log("This speech took place during the common era.");
    }

  // Compare this speech to the others to determine if it's the oldest or most recent speech on the page.   
    if(speechesArray[1].year > speechesArray[0].year && speechesArray[1].year > speechesArray[2].year) {
      console.log("This is the most recent speech on the page.");
    }
    
    if(speechesArray[1].year < speechesArray[0].year && speechesArray[1].year < speechesArray[2].year) {
      console.log("This is the oldest speech on the page.");
    }

});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.

  console.log("This speech was written by " + speechesArray[2].author + " in " +  speechesArray[2].year + ".");

    if(speechesArray[2].yearIsBCE === true) {
      console.log("This speech took place before the common era.");
    }
    else {
      console.log("This speech took place during the common era.");
    }

  // Compare this speech to the others to determine if it's the oldest or most recent speech on the page.  
    if(speechesArray[2].year > speechesArray[1].year && speechesArray[2].year > speechesArray[0].year) {
      console.log("This is the most recent speech on the page.");
    }
    
    if(speechesArray[2].year < speechesArray[1].year && speechesArray[2].year < speechesArray[0].year) {
      console.log("This is the oldest speech on the page.");
    }
});