

let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';


//Create function getComputerChoice, will return rock, etc



function getComputerChoice() {
   let arr = [rock, paper, scissors] 
   let idx = Math.floor(Math.random() * arr.length);
   return (arr[idx]);
}

// Use console.log() to get result -DONE
//console.log(getComputerChoice(arr,idx));

/*
Write function that plays 1 round, have two parameters 
 (playerSelection, computerSelection) then return string showing 
 winner. Side note: make user input case-insensitve - 1/2 DONE
*/
const para = document.querySelector("#para");
const paras = document.querySelector("#paras");
const testInput = document.querySelector("#testInput")
const cS = document.querySelector("#computerScore")
const pS = document.querySelector("#playerScore")
const input = document.querySelector(".playerInput") //For input
//let computerSelection = getComputerChoice(arr, idx);
//let pChoice = (input.value);

let playerSelection = null;
let computerScore = 0;
let playerScore = 0;

//console.log(`1st ${computerSelection}`);


function match(playerSelection) {

   let computerSelection = getComputerChoice(); // figure this out
   


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


   if (playerSelection == 'rock' && computerSelection === rock) {
      para.textContent = 'Tie: Rock ties with rock!';
      alert('Tie: Rock ties with rock!');
      console.log(`Player chose ${playerSelection}!`);
      console.log(`Computer chose ${computerSelection}!`);
   } else if (playerSelection === 'rock' && computerSelection === paper) {
      para.textContent = 'Lose: Rock loses to paper!';
      alert('Lose: Rock loses to paper!');
      console.log(`Player chose ${playerSelection}!`);
      console.log(`Computer chose ${computerSelection}!`);
      return computerScore++
   } else if (playerSelection == 'rock' && computerSelection === scissors) {
      para.textContent = 'Win: Rock beats scissors!';
      alert('Win: Rock beats scissors!');
      console.log(`Player chose ${playerSelection}!`);
      console.log(`Computer chose ${computerSelection}!`);
      return playerScore++
   } else if (playerSelection == paper && computerSelection === rock) {
      para.textContent = 'Win: Paper beats rock!';
      alert('Win: Paper beats rock!');
      console.log(`Player chose ${playerSelection}!`);
      console.log(`Computer chose ${computerSelection}!`);
      return playerScore++
   } else if (playerSelection == paper && computerSelection === paper) {
      para.textContent = 'Tie: Paper ties with paper!';
      alert('Tie: Paper ties with paper!');
      console.log(`Player chose ${playerSelection}!`);
      console.log(`Computer chose ${computerSelection}!`);
   } else if (playerSelection == paper && computerSelection === scissors) {
      alert('Lose: Paper loses to scissors!');
      console.log(`Player chose ${playerSelection}!`);
      console.log(`Computer chose ${computerSelection}!`);
      return computerScore++
   } else if (playerSelection == 'scissors' && computerSelection === rock) {
      para.textContent = 'Lose: Scissors loses to rock!';
      alert('Lose: Scissors loses to rock!');
      console.log(`Player chose ${playerSelection}!`);
      console.log(`Computer chose ${computerSelection}!`);
      return computerScore++
   } else if (playerSelection == 'scissors' && computerSelection === paper) {
      para.textContent = 'Win: Scissors beats paper!';
      alert('Win: Scissors beats paper!');
      console.log(`Player chose ${playerSelection}!`);
      console.log(`Computer chose ${computerSelection}!`);
      return playerScore++
   } else if (playerSelection == 'scissors' && computerSelection === scissors) {
      para.textContent = 'Tie: Scissors ties with scissors!';
      alert('Tie: Scissors ties with scissors!');
      console.log(`Player chose ${playerSelection}!`);
      console.log(`Computer chose ${computerSelection}!`);
   } else {
      para.textContent = 'turtle';
   }

}
//console.log(match(playerSelection)) //initiates game




//var u = arr.indexOf(pChoice.toLowerCase()); // User Input Case Insensitive

//-- return results of last function, going to need results for later
//--console.log results to see if it works
//console.log(playerScore);
//console.log(computerScore);



/*--write new function called game().Use previous funciton inside of this
to play 5 round games that keeps score and reports a winner or loser.
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
      paras.textContent = 'Game result: You win!';
   } else if (computerScore > playerScore) {
      paras.textContent = 'Game result: You Lose!';
   } else if (playerScore == computerScore){
      paras.textContent = 'Game result: Tie!';
   } else {
      paras.textContent = '';
   }
}


//console.log(game()); -- initiates game function

//repeat playRound() function 5 times
//use console.log to display results reach round and winner at the end
//Use prompt to get input from the user.

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


