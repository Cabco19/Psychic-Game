// Creates an array that lists out all of the options (a-z).
// code to use after testing phase ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var computerChoices = ["a", "b"];
    var userGuess;
    var computerGuess;

    // Creating variables to hold the number of wins and losses. They start at 0. 
    // May want to add variable for guesses left - not sure yet!!!!!!!
    var wins;
    var losses;
    var guesses = 0;
   // var guesses = 4;

    // Create variables that hold references to the places in the HTML where we want to display things.
    var userChoiceText = document.getElementById("userchoice-text");
    var computerChoiceText = document.getElementById("computerchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeft = document.getElementById("guesses-left");

    // Create loop
    // for (var i = 1; i < 4; i++){}
// run a loop 5 times to allow for 5 guesses

document.onkeyup = function(event) {

    // Determines which key was pressed.
    userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];  
  
        // Only run the following code if user guesses correctly      
        if (userGuess === computerGuess) {
            wins++;
            console.log("User wins!");
            console.log("User chose " + userGuess);
            console.log("Computer chose " + computerGuess);
            userChoiceText.textContent = "Your guesses so far: " + userGuess;
            winsText.textContent = "Wins: " + wins;
            
          }
        if (userGuess !== computerGuess) {
            losses++;
            lossesText.textContent = "Losses: " + losses;
            userChoiceText.textContent = "Your guesses so far: " + userGuess;
            console.log("Computer wins!");
            console.log("User chose " + userGuess);
            console.log("Computer chose " + computerGuess);
            //console.log("User guess is " + userGuess);
            //console.log("Computer guess is " + computerGuess);
            //console.log("Total losses: " + losses);                    
          }
          var guesses = wins + losses;
          var guessCounter = 5 - guesses;
          console.log(guesses);
          guessesLeft.textContent = "Guesses left: " + guessCounter;

          if (guesses > 5) {
              console.log ("game is over");
              location.reload();
          }
          
        return;
                
        }
        
        console.log("-----------");
        
        userGuess = "";
        computerGuess = "";
    wins = "";
    losses = "";
    console.log("NO more guesses left");

     //   console.log("-----------");
     
      
      //alert("Game Over");

      
      // userChoiceText.textContent = "You chose: " + userGuess;
      //computerChoiceText.textContent = "The computer chose: " + computerGuess;
      //winsText.textContent = "wins: " + wins;
     // lossesText.textContent = "losses: " + losses;
        //console.log("Computer Guess: " + computerGuess);
        //console.log(userGuess);


        
        // Display the user wins, losses, guesses left and user guesses so far

    
    