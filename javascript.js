let count = 0;
let playerScore = 0;
let computerScore = 0;

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

const result = document.querySelector("#results");
const score = document.querySelector("#score");
score.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalize(playerSelection);

  if (playerSelection === computerSelection) {
    // console.log(`You Draw! You both chose ${playerSelection}`);
    const draw = document.createElement("div");
    draw.textContent = `You Draw! You both chose ${playerSelection}`;
    result.appendChild(draw);

    return "Draw";
    // return `You Draw! You both chose ${playerSelection}`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    // console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    const win = document.createElement("div");
    win.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    result.appendChild(win);

    playerScore++;
    score.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;

    return "Win";
    // return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    // console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    const lose = document.createElement("div");
    lose.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    result.append(lose);

    computerScore++;
    score.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;

    return "Lose";
    // return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const rockBtn = document.querySelector("#rock-btn");
rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
rockBtn.addEventListener("click", () => console.log(count++));
rockBtn.addEventListener("click", () => {
  if (count === 5) {
    count = 0;
  }
});

const paperBtn = document.querySelector("#paper-btn");
paperBtn.addEventListener("click", () =>
  playRound("paper", getComputerChoice())
);

const scissorsBtn = document.querySelector("#scissors-btn");
scissorsBtn.addEventListener("click", () =>
  playRound("scissors", getComputerChoice())
);

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    // let choice = prompt("Please choose rock, paper, or scissors");
    let result = playRound(choice, getComputerChoice());

    if (result === "Win") {
      playerScore++;
    } else if (result === "Lose") {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    console.log("The player wins the game!");
  } else if (computerScore > playerScore) {
    console.log("The computer wins!");
  } else {
    console.log("The game is a draw!");
  }
}

// game();
