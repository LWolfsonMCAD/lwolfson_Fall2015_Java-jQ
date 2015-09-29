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
    favoriteSpeechPrompt;


//While loop to display the author of each speech in the array via console.log
  var i = 0;
  while(i < speechesArray.length) {
    console.log("This speech is written by " + speechesArray[i].author);
    i++;
  }    


//For loop to check for newest and oldest speech years and set the corresponding variables to the appropriate year values.
  var newestSpeechYear = 1940;
  var oldestSpeechYear = 1940;

  for(i = 0; i < speechesArray.length; i++) {
    if(speechesArray[i].year < oldestSpeechYear) {
      var oldestSpeechYear = speechesArray[i].year
    }

    if(speechesArray[i].year > newestSpeechYear) {
      var newestSpeechYear = speechesArray[i].year
    }
  }

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  favoriteSpeechPrompt = window.prompt('Which speech author is your favorite?').toLowerCase();

  for (var i = 0; i < speechesArray.length; i++) {
    if(favoriteSpeechPrompt === speechesArray[i].author.toLowerCase()) { 
      console.log(speechesArray[i].author + " was " + speechesArray[i].authorAge+ " during this speech.");
      break;
    }
  } 

});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year);

  if(speechesArray[0].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  if(speechesArray[0].year <= oldestSpeechYear) {
    console.log("This is the oldest speech on the page.");
  }

  if(speechesArray[0].year >= newestSpeechYear) {
    console.log("This is the newest speech on the page.");
  }


});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year);

  if(speechesArray[1].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  if(speechesArray[1].year <= oldestSpeechYear) {
    console.log("This is the oldest speech on the page.");
  }

  if(speechesArray[1].year >= newestSpeechYear) {
    console.log("This is the newest speech on the page.");
  }

});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year);

  if(speechesArray[2].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  if(speechesArray[2].year <= oldestSpeechYear) {
    console.log("This is the oldest speech on the page.");
  }

  if(speechesArray[2].year >= newestSpeechYear) {
    console.log("This is the newest speech on the page.");
  }


});

