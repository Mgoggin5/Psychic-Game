
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"];
        var winCount = 0;
        var lossCount = 0;
        var guessesRemaining = 10;
        var yourGuesses = [];
        var winDisplay = document.getElementById("winCount");
        var lossDisplay = document.getElementById("lossCount");
        var yourGuessesDisplay = document.getElementById("yourGuess")
        var yourGuessesRemaining = document.getElementById("guessesLeft");
        

        document.onkeyup = function (event) {
            var userGuess = event.key;
        yourGuesses.push(" " + userGuess);
        yourGuessesRemaining.textContent = yourGuesses;

            var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        yourGuesses.innerText = userGuess
            alert("User guess: " + userGuess);
            

            if (userGuess === computerGuess) {
                winCount++;
                winDisplay.textContent = winCount;
                gameOver(true)
            }
            else {
                guessesRemaining--;
                yourGuessesDisplay.textContent = guessesRemaining;
                
                
            }

            if (yourGuessesRemaining === 0); {
                lossCount++;
                lossDisplay.textContent = lossCount;

                
            }
            if (guessesRemaining == 0) {
                alert("Game Over!")
            }
            

             function gameOver(isGameWon) {
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]

            if (isGameWon); {
                alert("You Win!")

            }
        };

    }
            


        