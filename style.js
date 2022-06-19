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
    let playerSelection = prompt("Rock, paper, or scissors? ","");
    alert(`Player selected ${playerSelection}`);
    let computerSelection = computerPlay();
    alert(`Computer selected ${computerSelection}`);

    if (playerSelection == "Rock") {
        if (computerSelection == "Paper"){
            console.log("Computer Wins");
        } else if (computerSelection == "Scissors"){
            console.log("Player Wins");
        } else { 
            console.log("It's a tie, try again");
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Paper"){
            console.log("It's a tie, try again");
        } else if (computerSelection == "Scissors"){
            console.log("Computer Wins");
        } else { 
            console.log("Player Wins");
        }
    } else {
        if (computerSelection == "Paper"){
            console.log("Player Wins");
        } else if (computerSelection == "Scissors"){
            console.log("It's a tie, try again");
        } else { 
            console.log("Computer Wins");
        }
    }
// if player is equal to paper comp scissors
// output comp wins
// if comp is rocl 
// output player wins
// if comp paper
// output try again

// if player picks scissors comp rock
// output comp wins
// comp picks paper
// player wins
// same input
// output try again
}