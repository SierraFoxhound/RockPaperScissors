

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
//const input = document.querySelector(".playerInput"); //For input
const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");
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
   

/*
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
      //alert('Tie: Rock ties with rock!');
      console.log(`Player chose ${playerSelection}!`);
      console.log(`Computer chose ${computerSelection}!`);
   } else if (playerSelection === 'rock' && computerSelection === paper) {
      matchResult.textContent = 'Lose: Rock loses to paper!';
      //alert('Lose: Rock loses to paper!');
      console.log(`Player chose ${playerSelection}!`);
      console.log(`Computer chose ${computerSelection}!`);
      return computerScore++
   } else if (playerSelection == 'rock' && computerSelection === scissors) {
      matchResult.textContent = 'Win: Rock beats scissors!';
      //alert('Win: Rock beats scissors!');
      console.log(`Player chose ${playerSelection}!`);
      console.log(`Computer chose ${computerSelection}!`);
      return playerScore++
   } else if (playerSelection == paper && computerSelection === rock) {
      matchResult.textContent = 'Win: Paper beats rock!';
      //alert('Win: Paper beats rock!');
      console.log(`Player chose ${playerSelection}!`);
      console.log(`Computer chose ${computerSelection}!`);
      return playerScore++
   } else if (playerSelection == paper && computerSelection === paper) {
      matchResult.textContent = 'Tie: Paper ties with paper!';
      //alert('Tie: Paper ties with paper!');
      console.log(`Player chose ${playerSelection}!`);
      console.log(`Computer chose ${computerSelection}!`);
   } else if (playerSelection == paper && computerSelection === scissors) {
      //alert('Lose: Paper loses to scissors!');
      console.log(`Player chose ${playerSelection}!`);
      console.log(`Computer chose ${computerSelection}!`);
      return computerScore++
   } else if (playerSelection == 'scissors' && computerSelection === rock) {
      matchResult.textContent = 'Lose: Scissors loses to rock!';
      //alert('Lose: Scissors loses to rock!');
      console.log(`Player chose ${playerSelection}!`);
      console.log(`Computer chose ${computerSelection}!`);
      return computerScore++
   } else if (playerSelection == 'scissors' && computerSelection === paper) {
      matchResult.textContent = 'Win: Scissors beats paper!';
      //alert('Win: Scissors beats paper!');
      console.log(`Player chose ${playerSelection}!`);
      console.log(`Computer chose ${computerSelection}!`);
      return playerScore++
   } else if (playerSelection == 'scissors' && computerSelection === scissors) {
      matchResult.textContent = 'Tie: Scissors ties with scissors!';
      //alert('Tie: Scissors ties with scissors!');
      console.log(`Player chose ${playerSelection}!`);
      console.log(`Computer chose ${computerSelection}!`);
   } else {
      matchResult.textContent = 'turtle';
   }

}

function playerSelectionRock() {
   match(rock,);
   cS.textContent = `Computer Score: ${computerScore}`;
   pS.textContent = `Player Score: ${playerScore}`;
   
   if (playerScore == 5) {
      gameResult.textContent = 'Game result: You win!';
      btnRock.disabled = true;
      btnPaper.disabled = true;
      btnScissors.disabled = true;
   } else if (computerScore == 5) {
      gameResult.textContent = 'Game result: You Lose!';
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
      btnRock.disabled = true;
      btnPaper.disabled = true;
      btnScissors.disabled = true;
   } else if (computerScore == 5) {
      gameResult.textContent = 'Game result: You Lose!';
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
      gameResult.textContent = 'Game result: You win!';
      btnRock.disabled = true;
      btnPaper.disabled = true;
      btnScissors.disabled = true;
   } else if (computerScore == 5) {
      gameResult.textContent = 'Game result: You Lose!';
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

//console.log(match(playerSelection)) //initiates game

//-- return results of last function, going to need results for later -DONE
//--console.log results to see if it works -DONE
//console.log(playerScore);
//console.log(computerScore);



/*--write new function called game().Use previous funciton inside of this
to play 5 round games that keeps score and reports a winner or loser. - DONE
*/
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

//console.log(game()); -- initiates game function

btnRock.addEventListener('click', playerSelectionRock);
btnPaper.addEventListener('click', playerSelectionPaper);
btnScissors.addEventListener('click', playerSelectionScissors);

//--TODO: (STATUS: DONE)
//--repeat playRound() function 5 times -DONE
//--use console.log to display results reach round and winner at the end -DONE
//--Use prompt to get input from the user -DONE
//----------------------------------------------------------

//--Experimental input from user-- WIP
/*
input.addEventListener("change", function () {
   let pChoice = (input.value);
   if (pChoice.toLowerCase() == rock.toLowerCase()) {
      game(match(rock, computerSelection));
   } else if (pChoice.toLowerCase() == paper.toLowerCase()) {
      game(match(paper, computerSelection));
   } else if (pChoice.toLowerCase() == scissors.toLowerCase()) {
      game(match(scissors, computerSelection));
   } else {
      testInput.textContent = 'Not an inputs';
   }
});
*/


