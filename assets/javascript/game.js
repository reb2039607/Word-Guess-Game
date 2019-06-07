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

    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
}
startGame();

// MAIN PROCESS
//=======================================================================









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