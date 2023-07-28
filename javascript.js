

let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';


//Create function getComputerChoice, will return rock, etc

function getComputerChoice() {
   let arr = [rock, paper, scissors] 
   let idx = Math.floor(Math.random() * arr.length);
   return (arr[idx]);
}

//-- Use console.log() to get result -DONE
//console.log(getComputerChoice(arr,idx));


const matchResult = document.querySelector("#matchResult");
const gameResult = document.querySelector("#gameResult");
const testInput = document.querySelector("#testInput");
const cS = document.querySelector("#computerScore");
const pS = document.querySelector("#playerScore");
const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");
//----------------------------------------------------------Music Section START
const btnThemeMusic = document.querySelector("#btnThemeMusic");
let themeMusic = new Audio('fx/clickClockWood.mp3')
themeMusic.volume = 0.05;
let winRoundSoundEffect = new Audio('fx/mixkit-game-loot-win-2013.wav');
winRoundSoundEffect.volume = 0.1;
let looseRoundSoundEffect = new Audio('fx/mixkit-losing-bleeps-2026.wav');
looseRoundSoundEffect.volume = 0.1;
let winGameSoundEffect = new Audio('fx/mixkit-winning-chimes-2015.wav');
winGameSoundEffect.volume = 0.15;
let looseGameSoundEffect = new Audio('fx/mixkit-losing-marimba-2025.wav');
looseGameSoundEffect.volume = 0.15;
//----------------------------------------------------------Music Section END
//let computerSelection = getComputerChoice(arr, idx);
//let pChoice = (input.value);
let playerSelection = null;
let computerScore = 0;
let playerScore = 0;
//console.log(`1st ${computerSelection}`);

/*
Write function that plays 1 round, have two parameters 
 (playerSelection, computerSelection) then return string showing 
 winner. Side note: make user input case-insensitve - DONE
*/
function match(playerSelection) {

   let computerSelection = getComputerChoice();
   

/* Old input function
   let sign = prompt("Choose your weapon: Rock, Paper, Scissors", '');

   if (sign.toLowerCase() == rock) {
      let = playerSelection = rock;
   } else if (sign.toLowerCase() == paper) {
      let = playerSelection = paper;
   } else if (sign.toLowerCase() == scissors) {
      let = playerSelection = scissors;
   } else{
      //console.log('Not a weapon!');
      alert(`${sign} is not a choice or a weapon!`)
   }
*/

   if (playerSelection == 'rock' && computerSelection === rock) {
      matchResult.textContent = 'Tie: Rock ties with rock!';
      console.log(`Player chose ${playerSelection}!`);
      console.log(`Computer chose ${computerSelection}!`);
   } else if (playerSelection === 'rock' && computerSelection === paper) {
      matchResult.textContent = 'Lose: Rock loses to paper!';
      looseRoundSoundEffect.currentTime = 0;
      looseRoundSoundEffect.play();
      console.log(`Player chose ${playerSelection}!`);
      console.log(`Computer chose ${computerSelection}!`);
      return computerScore++
   } else if (playerSelection == 'rock' && computerSelection === scissors) {
      matchResult.textContent = 'Win: Rock beats scissors!';
      winRoundSoundEffect.currentTime = 0;
      winRoundSoundEffect.play();
      console.log(`Player chose ${playerSelection}!`);
      console.log(`Computer chose ${computerSelection}!`);
      return playerScore++
   } else if (playerSelection == paper && computerSelection === rock) {
      matchResult.textContent = 'Win: Paper beats rock!';
      winRoundSoundEffect.currentTime = 0;
      winRoundSoundEffect.play();
      console.log(`Player chose ${playerSelection}!`);
      console.log(`Computer chose ${computerSelection}!`);
      return playerScore++
   } else if (playerSelection == paper && computerSelection === paper) {
      matchResult.textContent = 'Tie: Paper ties with paper!';
      console.log(`Player chose ${playerSelection}!`);
      console.log(`Computer chose ${computerSelection}!`);
   } else if (playerSelection == paper && computerSelection === scissors) {
      matchResult.textContent = 'Lose: Paper loses to scissors';
      looseRoundSoundEffect.currentTime = 0;
      looseRoundSoundEffect.play();
      console.log(`Player chose ${playerSelection}!`);
      console.log(`Computer chose ${computerSelection}!`);
      return computerScore++
   } else if (playerSelection == 'scissors' && computerSelection === rock) {
      matchResult.textContent = 'Lose: Scissors loses to rock!';
      looseRoundSoundEffect.currentTime = 0;
      looseRoundSoundEffect.play();
      console.log(`Player chose ${playerSelection}!`);
      console.log(`Computer chose ${computerSelection}!`);
      return computerScore++
   } else if (playerSelection == 'scissors' && computerSelection === paper) {
      matchResult.textContent = 'Win: Scissors beats paper!';
      winRoundSoundEffect.currentTime = 0;
      winRoundSoundEffect.play();
      console.log(`Player chose ${playerSelection}!`);
      console.log(`Computer chose ${computerSelection}!`);
      return playerScore++
   } else if (playerSelection == 'scissors' && computerSelection === scissors) {
      matchResult.textContent = 'Tie: Scissors ties with scissors!';
      console.log(`Player chose ${playerSelection}!`);
      console.log(`Computer chose ${computerSelection}!`);
   } else {
      matchResult.textContent = 'turtle';
   }

}
// These next three functions get the rock, paper, and scissors buttons working
function playerSelectionRock() {
   match(rock,);
   cS.textContent = `Computer Score: ${computerScore}`;
   pS.textContent = `Player Score: ${playerScore}`;
   
   if (playerScore == 5) {
      gameResult.textContent = 'Game result: You win!';
      winGameSoundEffect.currentTime = 0;
      winGameSoundEffect.play();
      btnRock.disabled = true;
      btnPaper.disabled = true;
      btnScissors.disabled = true;
   } else if (computerScore == 5) {
      gameResult.textContent = 'Game result: You Lose!';
      looseGameSoundEffect.currentTime = 0;
      looseGameSoundEffect.play();
      btnRock.disabled = true;
      btnPaper.disabled = true;
      btnScissors.disabled = true;
   } else if (playerScore == 5 && computerScore == 5) {
      gameResult.textContent = 'Game result: Tie!';
      btnRock.disabled = true;
      btnPaper.disabled = true;
      btnScissors.disabled = true;
   } else {
      gameResult.textContent = '';
   }
}
function playerSelectionPaper() {
   match(paper,);
   cS.textContent = `Computer Score: ${computerScore}`;
   pS.textContent = `Player Score: ${playerScore}`;

   if (playerScore == 5) {
      gameResult.textContent = 'Game result: You win!';
      winGameSoundEffect.currentTime = 0;
      winGameSoundEffect.play();
      btnRock.disabled = true;
      btnPaper.disabled = true;
      btnScissors.disabled = true;
   } else if (computerScore == 5) {
      gameResult.textContent = 'Game result: You Lose!';
      looseGameSoundEffect.currentTime = 0;
      looseGameSoundEffect.play();
      btnRock.disabled = true;
      btnPaper.disabled = true;
      btnScissors.disabled = true;
   } else if (playerScore == 5 && computerScore == 5) {
      gameResult.textContent = 'Game result: Tie!';
      btnRock.disabled = true;
      btnPaper.disabled = true;
      btnScissors.disabled = true;
   } else {
      gameResult.textContent = '';
   }
}
function playerSelectionScissors() {
   match(scissors,);
   cS.textContent = `Computer Score: ${computerScore}`;
   pS.textContent = `Player Score: ${playerScore}`;

   if (playerScore == 5) {
      gameResult.textContent = 'Game result: You win!'
      winGameSoundEffect.currentTime = 0;
      winGameSoundEffect.play();
      btnRock.disabled = true;
      btnPaper.disabled = true;
      btnScissors.disabled = true;
   } else if (computerScore == 5) {
      gameResult.textContent = 'Game result: You Lose!';
      looseGameSoundEffect.currentTime = 0;
      looseGameSoundEffect.play();
      btnRock.disabled = true;
      btnPaper.disabled = true;
      btnScissors.disabled = true;
   } else if (playerScore == 5 && computerScore == 5) {
      gameResult.textContent = 'Game result: Tie!';
      btnRock.disabled = true;
      btnPaper.disabled = true;
      btnScissors.disabled = true;
   } else {
      gameResult.textContent = '';
   }
}
//This function is for the play music button by title
function playThemeMusic() {
   if (themeMusic.paused) {
      themeMusic.play();
      btnThemeMusic.textContent = 'Pause';
   } else {
      themeMusic.pause();
      btnThemeMusic.textContent = 'Play';
   }
   
}

//Old game function, not used at all
function game() {
   console.log('Round 1!');
   match(playerSelection, );
   //console.log(`Computer chose ${computerSelection}!`);
   console.log('Player score:', playerScore);
   console.log('Computer score:', computerScore);
   cS.textContent = `Computer Score: ${computerScore}`;
   pS.textContent = `Player Score: ${playerScore}`;

   
   console.log('Round 2!');
   match(playerSelection,);
   //console.log(`Computer chose ${computerSelection}!`);
   console.log('Player score:', playerScore);
   console.log('Computer score:', computerScore);
   cS.textContent = `Computer Score: ${computerScore}`;
   pS.textContent = `Player Score: ${playerScore}`;
   
   
   console.log('Round 3!');
   match(playerSelection,);
   //console.log(`Computer chose ${computerSelection}!`);
   console.log('Player score:', playerScore);
   console.log('Computer score:', computerScore);
   cS.textContent = `Computer Score: ${computerScore}`;
   pS.textContent = `Player Score: ${playerScore}`;

   
   console.log('Round 4!');
   match(playerSelection,);
   //console.log(`Computer chose ${computerSelection}!`);
   console.log('Player score:', playerScore);
   console.log('Computer score:', computerScore);
   cS.textContent = `Computer Score: ${computerScore}`;
   pS.textContent = `Player Score: ${playerScore}`;

   
   console.log('Final Round!');
   match(playerSelection,);
   //console.log(`Computer chose ${computerSelection}!`);
   console.log('Player score:', playerScore);
   console.log('Computer score:', computerScore);
   cS.textContent = `Computer Score: ${computerScore}`;
   pS.textContent = `Player Score: ${playerScore}`;
  

   
   if (playerScore > computerScore) {
      gameResult.textContent = 'Game result: You win!';
   } else if (computerScore > playerScore) {
      gameResult.textContent = 'Game result: You Lose!';
   } else if (playerScore == computerScore){
      gameResult.textContent = 'Game result: Tie!';
   } else {
      gameResult.textContent = '';
   }
}


btnThemeMusic.addEventListener('click',playThemeMusic);
btnRock.addEventListener('click', playerSelectionRock);
btnPaper.addEventListener('click', playerSelectionPaper);
btnScissors.addEventListener('click', playerSelectionScissors);

