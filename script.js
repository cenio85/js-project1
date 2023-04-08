//function returning randomly either "Rock","Paper" or "Scissors"
    function getComputerChoice() {
      const choices = ['rock', 'paper', 'scissors'];
      const randomIndex = Math.floor(Math.random() * 3);
      return choices[randomIndex];
    }
    //console.log(getComputerChoice());

// Compare the player's selection and the computer's selection to determine the winner
    function playRound(playerSelection, computerSelection) {
      playerSelection = playerSelection.toLowerCase(); // make case-insensitive
      if (playerSelection === computerSelection) {
        return "It's a tie!";
      } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
      ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
      } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
      }
    }
    //console.log(playRound('rock', 'scissors'));

/*NEW function called game(). Use the previous function inside of this one to play a 5 round game 
    that keeps score and reports a winner or loser at the end*/
    function game() {
      let playerScore = 0;
      let computerScore = 0;
      for (let i = 0; i < 5; i++) {
        let playerSelection;
        do {
          playerSelection = prompt("Choose rock, paper, or scissors:");
        } while (!playerSelection); // keep prompting until a value is entered
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection.toLowerCase(), computerSelection);
        console.log(roundResult);
      }
    }
    
    game()
    
