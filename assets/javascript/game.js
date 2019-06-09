// GLOBAL VARIABLES
//======================================================================

//array of words to be guessed // if you have an issue with the same word appearing, put it in a function
const words = ["kitana", "jade", "sindel", "mileena", "fatality", "raiden", "scorpion", "babality", "flawless", "animality", "baraka", "kano", "kabal", "jax"];

let selectedWord = "";
let lettersinWord = [];
let numBlanks = 0;
let blanksAndSuccesses = []; //j _ _ 
let wrongLetters = [];

// Game counters
let winCount = 0;
let lossCount = 0;
let guessesLeft = 9;



// FUNCTIONS (Reusable blocks of code that I will call when needed)
//=======================================================================

function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    //reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    for (let i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;


    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
    let isLetterInWord = false;

    for (let j = 0; j < numBlanks; j++) {
        if (selectedWord[j] == letter) {
            isLetterInWord = true;
            // alert("Letter") tested, letters were found
        }
    }
    //time to find letters
    if (isLetterInWord) {
        for (let i = 0; i < numBlanks; i++) {
            if (selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    }
    //letter not found
    else {
        wrongLetters.push(letter);
        guessesLeft--

    }
console.log(blanksAndSuccesses);
}

function roundComplete() {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left " + guessesLeft);

document.getElementById("numGuesses").innerHTML = guessesLeft;
document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

    //check is user won
    if(lettersinWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert("You guessed " + selectedWord + ". Flawless Victory!");
        
    //update win counter
    document.getElementById("winCounter").innerHTML = winCount;

        startGame();
    }
    //if user lost
    else if(guessesLeft == 0) {
        lossCount++;
        alert("Your soul is mine!");

    //update loss counter
    document.getElementById("lossCounter").innerHTML = lossCount;

        startGame();

    }

}
 

// MAIN PROCESS
//=======================================================================


startGame();

document.onkeyup = function (event) {
    let letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
    console.log(letterGuessed);
    console.log(roundComplete);
}








/* <script> this is the old code I scratched. After seeing different ways of doing things, I liked the approach of setting up your variables first.

        //array of words to be guessed
        const words = ["kitana", "jade", "sindel", "mileena", "fatality", "raiden", "scorpion", "babality", "flawless", "baraka", "kano", "kabal", "jax"];


        //picks random words
        let word = words[Math.floor(Math.random() * words.length)];
        console.log(word);

        //choosing a random word from words array
        let answerArray = [];
        for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_";
            prompt(answerArray);
        }

        let remainingLetters = word.length;



        let guessedLetters = [];

//around here is where it stops doing what I want it to...
        while (remainingLetters > 0) {
            if (let j = 0; j < remainingLetters.length; j++) {
                remainingLetters[j--];
            }


        }





//wins should display "Flawless Victory" and losses "Your soul is mine!"
//when we get there anyway...
    </script> */