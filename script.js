const rock = "rock";
const paper = "paper"
const scissors = "scissors";

let userScore = 0;
let computerScore = 0;

let div = document.querySelector("#display");

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

function playRound(userChoice, computerChoice) {
    let message = `Your choice: ${userChoice}\nOpponent choice: ${computerChoice}`;
    if (userChoice === computerChoice) {
        message += "<br>Tie!";
        // no action
    } else if ((userChoice === rock && computerChoice === scissors) ||
        (userChoice === paper && computerChoice === rock) ||
        (userChoice === scissors && computerChoice === paper)) {
        message += "<br>Round won!";
        userScore++;
    } else {
        message += "<br>Round lost!";
        computerScore++;
    }

    message += `<br>Score. You: ${userScore} Computer: ${computerScore}`;
    div.innerHTML = message;
}

function displayFinalResult() {
    let message = `Final score. You: ${userScore} Computer: ${computerScore}`;

    if (userScore > computerScore) {
        message += "<br>YOU WON!";
    } else if (userScore < computerScore) {
        message += "<br>YOU LOST!";
    } else {
        message += "<br>IT'S A TIE!";
    }

    div.innerHTML = message;
}

window.addEventListener("click", (event) => {
    if (userScore === 5 || computerScore === 5) {
        return;
    }

    if (event.target.tagName === "BUTTON") {
        const userChoice = event.target.id;
        const computerChoice = generateComputerChoice();
        playRound(userChoice, computerChoice);
    }

    if (userScore === 5 || computerScore === 5) {
        displayFinalResult();
    }
});

