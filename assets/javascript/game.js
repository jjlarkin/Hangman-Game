/**************************************
 Attempt at Hangman

 James Larkin

 ***************************************/

/* Psuedocode
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
    var wordList = ["red", "party", "supply", "cheese", "quadrant", "another", "word"];
    randoWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(randoWord)
    return randoWord;

};
//count characters and write blanks from wordList[]
function blanks(inWord) {
    var blnkArr=[];
    for (i = 0; i < inWord.length; i++) {

        blnkArr.push("_");
    };
    console.log(blnkArr)
    return blnkArr;
};

function isALetter(inCurrent, inUserGuess, inArr, letterTrue) {
    inArr=[];
    for (i = 0; i < inCurrent.length; i++) {
        if (inCurrent.charAt(i) === inUserGuess) {
            inArr[i] = inUserGuess;
            return letterTrue = true;
        } else return letterTrue = false;


    }

};
//********************************************************


// Start up the game by pressing any key

var wins, losses, guessesLeft, currentWord, currentBlanks, boolLetter;


//
console.log("Press any letter to start")
document.onkeyup = function (event) {

    var userGuess = String.fromCharCode(event.keyCode);

    guessesLeft = 8;

    currentWord = chooseWord(currentWord);
    currentBlanks = blanks(currentWord);



    console.log(guessesLeft);


    isALetter(currentWord, userGuess, currentBlanks, boolLetter);
    console.log(currentBlanks);

    guessesLeft--;


}




