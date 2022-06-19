//creating a function that will output R, P or S
function computerPlay() { 
    //Set RPS as numbers three numerical numbers 
    let pick = Math.floor(Math.random()*3)
    // output rock if zero
    if (pick == 0){
        return "Paper"

    } else if (pick == 1) { //output paper if 1
        return "Rock"
    } else {
        return "Scissors" // output scissors if 2
    }
}

// function that will play RPS (only 1 round)
function playRound(playerSelection, computerSelection){
// set player and computer parameters 
    //let playerSelection = prompt("Rock, paper, or scissors? ","").toUpperCase();
   // let computerSelection = computerPlay();
// compare player pick to computer pick 
    playerSelection.toLowerCase();
    if (playerSelection == "rock") { 
        if (computerSelection == "Paper"){
            return "Computer Wins, Paper beats Rock";
        } else if (computerSelection == "Scissors"){
            return "Player Wins, Rock beats Scissors";
        } else { 
            return "It's a tie, both picked Rock";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "Paper"){
            return "It's a tie, both picked Paper";
        } else if (computerSelection == "Scissors"){
            return "Computer Wins, Scissors beats Paper";
        } else { 
            return "Player Wins, Paper beats Rock";
        }
    } else if (playerSelection == "scissors"){ 
        if (computerSelection == "Paper"){
            return "Player Wins, Scissors beats Paper";
        } else if (computerSelection == "Scissors"){
            return "It's a tie, both picked Scissors";
        } else { 
            return "Computer Wins, Rock beats Scissors";
        }
    } else { // player didnt pick from the
        return "Try again";
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));