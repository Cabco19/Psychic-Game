// Creates an array that lists out all of the options (a-z).
// code to use after testing phase ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var userGuess;
    var computerGuess;
    var userGuesses = [];

    // Creating variables to hold the number of wins and losses. They start at 0. 
    var wins;
    var losses;
    var guesses = 0;

    // Create variables that hold references to the places in the HTML where we want to display things.
    var userChoiceText = document.getElementById("userchoice-text");
    var computerChoiceText = document.getElementById("computerchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeft = document.getElementById("guesses-left");

    document.onkeyup = function(event) {

    // Determines which key was pressed.
    userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];  
     

    if ((userGuess.length === 1 ) && ((userGuess >= "a" && userGuess <= "z") || (userGuess >= "A" && userGuess <= "Z"))){
        userGuesses.push(userGuess); 
        // Only run the following code if user guesses correctly  
        if (userGuess === computerGuess) {
            wins++;
            console.log("User wins!");
            console.log("User chose " + userGuess);
            console.log("Computer chose " + computerGuess);
            userChoiceText.textContent = "Your guesses so far: " + userGuesses.join(", ");
            winsText.textContent = "Wins: " + wins;            
          }

        // Only run the following code if the user is wrong
        if (userGuess !== computerGuess) {
            losses++;
            lossesText.textContent = "Losses: " + losses;
            userChoiceText.textContent = "Your guesses so far: " + userGuesses.join(", ");
            console.log("Computer wins!");
            console.log("User chose " + userGuess);
            console.log("Computer chose " + computerGuess);               
          }
            
            var guesses = wins + losses;
            var guessCounter = 10 - guesses;
            console.log(guesses);
            guessesLeft.textContent = "Guesses left: " + guessCounter;

          if (guesses > 10) {
              console.log ("game is over");
              location.reload();
          }
          
        return;
                
        }
        
      }   
        console.log("-----------");
        
        userGuess = "";
        computerGuess = "";
        wins = "";
        losses = "";


    
    