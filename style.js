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
function game(){
// set player and computer parameters 
    let playerSelection = prompt("Rock, paper, or scissors? ","").toUpperCase();
    let computerSelection = computerPlay();
// compare player pick to computer pick 
    if (playerSelection == "ROCK") { 
        if (computerSelection == "Paper"){
            console.log("Computer Wins, Paper beats Rock");
        } else if (computerSelection == "Scissors"){
            console.log("Player Wins, Rock beats Scissors");
        } else { 
            console.log("It's a tie, both picked Rock");
        }
    } else if (playerSelection == "PAPER") {
        if (computerSelection == "Paper"){
            console.log("It's a tie, both picked Paper");
        } else if (computerSelection == "Scissors"){
            console.log("Computer Wins, Scissors beats Paper");
        } else { 
            console.log("Player Wins, Paper beats Rock");
        }
    } else if (playerSelection == "SCISSORS"){ 
        if (computerSelection == "Paper"){
            console.log("Player Wins, Scissors beats Paper");
        } else if (computerSelection == "Scissors"){
            console.log("It's a tie, both picked Scissors");
        } else { 
            console.log("Computer Wins, Rock beats Scissors");
        }
    } else { // player didnt pick from the
        console.log("Try again")
    }
}