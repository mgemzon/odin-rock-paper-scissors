// Generate choice from computer

// Get user choice

// Compare user choice and computer choice
//   IF uc and cc are equal it is a tie.
//   ELIF uc is rock and cc is scissors OR
//        uc is paper and cc is rock OR
//        uc is scissors and cc is paper
//          uc win
//   ELSE cc win
//      cc win

const rock = "rock";
const paper = "paper"
const scissors = "scissors";

let userScore = 0;
let computerScore = 0;

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return rock;
    } else if (randomNumber === 1) {
        return paper;
    } else {
        return scissors;
    }
}

function getUserChoice() {
    let userChoice = prompt("Rock, paper, scissors?");
    userChoice = userChoice.toLowerCase().trim();
    if (!(userChoice === rock || userChoice === paper || userChoice === scissors)) {
        // throw new Error("Invalid choice!");
    }
    return userChoice;
}

function playRound(userChoice, computerChoice) {
    console.log(`Your choice: ${userChoice}\nOpponent choice: ${computerChoice}`);
    if (userChoice === computerChoice) {
        console.log("Tie!");
        // no action
    } else if ((userChoice === rock && computerChoice === scissors) ||
        (userChoice === paper && computerChoice === rock) ||
        (userChoice === scissors && computerChoice === paper)) {
        console.log("Round won!");
        userScore++;
    } else {
        console.log("Round lost!");
        computerChoice++;
    }
}

function playGame() {
    playRound(getUserChoice(), generateComputerChoice());
    playRound(getUserChoice(), generateComputerChoice());
    playRound(getUserChoice(), generateComputerChoice());
    playRound(getUserChoice(), generateComputerChoice());
    playRound(getUserChoice(), generateComputerChoice());

    console.log(`Final score. You: ${userScore} Computer: ${computerScore}`);

    if (userScore > computerScore) {
        console.log("YOU WON!");
    } else if (userScore < computerScore) {
        console.log("YOU LOST!");
    } else {
        console.log("IT'S A TIE.");
    }
}

playGame();
