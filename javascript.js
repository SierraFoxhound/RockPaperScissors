
//Create function getComputerChoice, will return rock, etc
var arr = ['Rock', 'Paper', 'Scissors']
var idx = Math.floor(Math.random() * arr.length);

function getComputerChoice () {
   return (arr[idx]);
}

// Use console.log() to get result
console.log(arr[idx])

/*
Write function that plays 1 round, have two parameters 
 (playerSelection, computerSelection) then return string showing 
 winner. Side note: make user input case-insensitve
*/

// return results of last function, going to need results for later
//console.log results to see if it works

/*write new function called game().Use previous funciton inside of this
to play 5 round games that keeps score and reports a winner or loser.
*/

//repeat playRound() function 5 times
//use console.log to display results reach round and winner at the end

//Use prompt to get input from the user.