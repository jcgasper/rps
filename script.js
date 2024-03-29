let pcScore = 0;
let playerScore = 0;
function getComputerChoice() {
    let val = Math.floor(Math.random() * 3);
        console.log(val);
    if (val == 0) {
        return "rock";
    }
    else if (val == 1) {
        return "paper"
    }
    else {
        return "scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        alert("TIE!");
    }

    else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        alert("You win! Paper beats rock!");
        playerScore++;
    }
    else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        alert("You lose! Scissors beats Paper!");
        pcScore++;
    }
    else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
        alert("You Win! Rock beats scissors");
        playerScore++;
    }
    else if ((playerSelection == "rock") && (computerSelection == "paper")) {
        alert("You Lose! Paper beats rock!");
        pcScore++;
    }
    else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        alert("You win! Scissors beats paper");
        playerScore++;
    }
    else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        alert("You lose! Rock beats scissors!");
        pcScore++;
    }
}

function playerPrompt(choice) {
    let check = choice.toLowerCase();
    if (check != "rock" && check != "paper" && check != "scissors") {
        playerPrompt(prompt("ERROR, PLEASE CHOOSE ROCK PAPER OR SCISSORS"));
    }
    
}


playerPrompt(prompt("Rock,Paper,Scissors?"));

let pcChoice = getComputerChoice();
