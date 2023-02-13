function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  if (choice === 1) {
    return "Rock";
  } else if (choice === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalize(playerSelection);

  if (playerSelection === computerSelection) {
    console.log(`You Draw! You both chose ${playerSelection}`);
    return "Draw";
    // return `You Draw! You both chose ${playerSelection}`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    return "Win";
    // return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    return "Lose";
    // return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let choice = prompt("Please choose rock, paper, or scissors");
    let result = playRound(choice, getComputerChoice());

    if (result === "Win") {
      playerScore++;
    } else if (result === "Lose") {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    return "The player wins!";
  } else if (computerScore > playerScore) {
    return "The computer wins!";
  } else {
    return "It's a draw!";
  }
}
