

let rock = 'rock'
let paper = 'paper'
let scissors = 'scissors'
var arr = [rock, paper, scissors]

//Create function getComputerChoice, will return rock, etc
var idx = Math.floor(Math.random() * arr.length);

function getComputerChoice(arr, idx) {
   let choice = (arr[idx]);
   return choice
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
let computerSelection = getComputerChoice(arr, idx);
//let pChoice = (input.value);

let playerSelection = rock;//TODO: Get this to work
let computerScore = 0;
let playerScore = 0;

//console.log(computerSelection);


function match(playerSelection, computerSelection) {

   let sign = prompt("Choose your weapon!");
   

   if (sign == rock) {
      let = playerSelection = rock;
   } else if (sign == paper) {
      let = playerSelection = paper;
   } else if (sign == scissors) {
      let = playerSelection = scissors;
   } else{
      paras.textContent = 'no owrk'
   }


   if (playerSelection == 'rock' && computerSelection === rock) {
      para.textContent = 'Tie: Rock ties with rock!';
   } else if (playerSelection === 'rock' && computerSelection === paper) {
      para.textContent = 'Lose: Rock loses to paper!';
      return computerScore++
   } else if (playerSelection == 'rock' && computerSelection === scissors) {
      para.textContent = 'Win: Rock beats scissors!';
      return playerScore++
   } else if (playerSelection == paper && computerSelection === rock) {
      para.textContent = 'Win: Paper beats rock!';
      return playerScore++
   } else if (playerSelection == paper && computerSelection === paper) {
      para.textContent = 'Tie: Paper ties with paper!';
   } else if (playerSelection == paper && computerSelection === scissors) {
      para.textContent = 'Lose: Paper loses to scissors!';
      return computerScore++
   } else if (playerSelection == 'scissors' && computerSelection === rock) {
      para.textContent = 'Lose: Scissors loses to rock!';
      return computerScore++
   } else if (playerSelection == 'scissors' && computerSelection === paper) {
      para.textContent = 'Win: Scissors beats paper!';
      return playerScore++
   } else if (playerSelection == 'scissors' && computerSelection === scissors) {
      para.textContent = 'Tie: Scissors ties with scissors!';
   } else {
      para.textContent = 'turtle';
   }

}
//console.log(match(playerSelection, computerSelection)) //initiates game




//var u = arr.indexOf(pChoice.toLowerCase()); // User Input Case Insensitive

//-- return results of last function, going to need results for later
//--console.log results to see if it works
//console.log(playerScore);
//console.log(computerScore);



/*--write new function called game().Use previous funciton inside of this
to play 5 round games that keeps score and reports a winner or loser.
*/
function game() {
  
   match(playerSelection, computerSelection);
   console.log('ps', playerScore);
   console.log('cs', computerScore);
   cS.textContent = `Computer Score: ${computerScore}`;
   pS.textContent = `playerScore ${playerScore}`;

   match(playerSelection, computerSelection);
   console.log('ps', playerScore);
   console.log('cs', computerScore);
   cS.textContent = `Computer Score: ${computerScore}`;
   pS.textContent = `playerScore ${playerScore}`;
   
   match(playerSelection, computerSelection);
   console.log('ps', playerScore);
   console.log('cs', computerScore);
   cS.textContent = `Computer Score: ${computerScore}`;
   pS.textContent = `playerScore ${playerScore}`;
  

   
   if (playerScore == 3) {
      paras.textContent = 'You win!';
   } else if (computerScore == 3) {
      paras.textContent = 'You Lose';
   } else {
      paras.textContent = 'keep fighting';
   }
}


console.log(game());

//repeat playRound() function 5 times
//use console.log to display results reach round and winner at the end
//Use prompt to get input from the user.

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



