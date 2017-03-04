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
    console.log(randoWord);
    return randoWord;

}
//count characters and write blanks from wordList[]
function blanks(inWord) {
    var blnkArr=[];
    for (i = 0; i < inWord.length; i++)
    {

        blnkArr.push("-");

    }

    return blnkArr;
}

function isALetter(inCurrent, inUserGuess, inArr)
{
    inArr=[];
    for (i = 0; i < inCurrent.length; i++)
    {
         if (inCurrent.charAt(i) == inUserGuess)
         {

            inArr[i] = inUserGuess;
            console.log(inArr[i]);

         }


    }

}
//********************************************************


// Start up the game by pressing any key

var wins, losses, guessesLeft, currentWord, currentBlanks,  userGuess;
var boolLetter = true;


//
console.log("Press any letter to start");
document.onkeyup = function (event) {

    currentWord = chooseWord(currentWord);
    currentBlanks = blanks(currentWord);
    console.log(currentBlanks);
    guessesLeft = 8;

    userGuess = String.fromCharCode(event.keyCode);

    isALetter(currentWord, userGuess, currentBlanks);
    //for(i=0;i<8;i++) {
    //    if ((typeof(userGuess) === "string")&& (boolLetter===true) ){
            console.log(guessesLeft);
            userGuess = String.fromCharCode(event.keyCode);
            console.log(userGuess);

            console.log(currentBlanks);

            guessesLeft--;


     //   }else  guessesLeft--;


}



