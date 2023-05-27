
//Create function getComputerChoice, will return rock, etc
const rock = 'Rock'
const paper = 'Paper'
const scissors = 'Scissors'
var arr = [rock, paper, scissors]
var idx = Math.floor(Math.random() * arr.length);

function getComputerChoice (arr, idx) {
   let choice = (arr[idx]);
   return choice
}

// Use console.log() to get result
console.log(getComputerChoice(arr,idx));

/*
Write function that plays 1 round, have two parameters 
 (playerSelection, computerSelection) then return string showing 
 winner. Side note: make user input case-insensitve
*/
function match(playerSelection, computerSelection) {
   if (playerSelection === 'rock', computerSelection === rock) {
      para.textContent = 'Tie'
   }
   else if (playerSelection === 'rock', computerSelection === paper) {
      para.textContent = 'Win'
   }
   else if (playerSelection === 'rock', computerSelection === scissors) {
      para.textContent = 'Lose'
   } else if (playerSelection === 'paper', computerSelection === rock) {
      para.textContent = 'Win'
   }
   else if (playerSelection === 'paper', computerSelection === paper) {
      para.textContent = 'Tie'
   }
   else if (playerSelection === 'paper', computerSelection === scissors) {
      para.textContent = 'Lose'
   } else if (playerSelection === 'scissors', computerSelection === rock) {
      para.textContent = 'Lose'
   }
   else if (playerSelection === 'scissors', computerSelection === paper) {
      para.textContent = 'Win'
   }
   else if (playerSelection === 'scissors', computerSelection === scissors) {
      para.textContent = 'Tie'
   }

}


// return results of last function, going to need results for later
//console.log results to see if it works

/*write new function called game().Use previous funciton inside of this
to play 5 round games that keeps score and reports a winner or loser.
*/

//repeat playRound() function 5 times
//use console.log to display results reach round and winner at the end

//Use prompt to get input from the user.