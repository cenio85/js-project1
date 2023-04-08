//function returning randomly either "Rock","Paper" or "Scissors"
function getComputerChoice(){
    const choices = ["Rock","Paper","Scissors"];
    const randomChoice = Math.floor(Math.random()*3);
    return choices[randomChoice]
}
//console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();//convert player's selection to LowerCase

     // Compare the player's selection and the computer's selection to determine the winner
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === computerSelection) {
    return "Tie!";
  } else {
    return "You Lose! " + computerSelection + " beats " + playerSelection;
  }
}
   
  const playerSelection = "PAPER";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));