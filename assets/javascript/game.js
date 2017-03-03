/**************************************
Attempt at Hangman

James Larkin

***************************************/

/* Things we need our program to do:
1.1. Pick a random word. 
--On key randomly pick from Array of words

1.2. Display amount of letters in the word via dashes 
use index to creat the desired number of dashes

2.1. Tell player to pick a letter/

2.2 Determine if the chosen letter is in the word

2.3 Place the letter in the correct place if correct/subtract from total tries if wrong 

3. Display scoreboard

4. Tell player they won/lost and reset the game
*/




function chooseWord(randoWord) {
    var wordList = ["red", "party", "supply"];
    var randoWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(randoWord)
    return randoWord;

};
//count characters and write blanks from wordList[]
function blanks(inWord) {
    for (i = 0; i < inWord.length; i++) {
        console.log("_")
    }
};

function isALetter(inCurrent) {
    for (i = 0; i < inCurrent.length; i++) {
        if (charAt(i) === userGuess) {}
    }
};

//********************************************************


// Start up the game by pressing any key
var wordlist = ["red", "party", "supply"];
var wins, losses, guessesLeft, currentWord;


//
console.log("Press any letter to start")
document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode)


    if (typeof(userGuess) === "string") {

        currentWord = chooseWord(currentWord);
        blanks(currentWord);

        userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        console.log(userGuess);



    }
}




// Here we create the HTML that will be injected into our div and displayed on the page.
