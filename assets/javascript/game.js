//creating variables to hold game data
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuesses = [];
var computerGuess;
// grabbing html elements for editing
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesSoFartext = document.getElementById("guessesSoFar-text");
//game init function
function gameStart() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
    guessesLeft = 9;
    userGuesses = [];
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    userChoiceText.textContent = "You choose: " + userGuesses;
}
//run game
gameStart();
//everytime a key is pressed run game functionality
document.onkeyup = function(event) {
    var userGuess = event.key;

    if (userGuess === computerGuess && guessesLeft > 0) {
        console.log("correct!");
        wins++;
        gameStart();
    } else if (userGuess !== computerGuess && guessesLeft > 0) {
        console.log("wrong");
        userGuesses.push(userGuess);
        guessesLeft--;
        console.log(guessesLeft);
        guessesSoFartext.textContent = "Guesses so far:" + guessesLeft;
        userChoiceText.textContent = "You choose: " + userGuesses;
    } else {
        losses++;
        gameStart();
    }

};