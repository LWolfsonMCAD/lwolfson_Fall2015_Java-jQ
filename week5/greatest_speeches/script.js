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

// Get user's name in order to personalize the experience.
var User = window.prompt("What is your name?");

if(User !== "" && User !== null){
    console.log("Hi " + User + "!");
}
else {
  console.log("Okay, I'll just call you User");
}

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var favoriteAuthor = prompt(User + " who is your favorite author?");

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
    console.log("oops");
    break;
  }

});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
});