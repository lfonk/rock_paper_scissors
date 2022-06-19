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
// compare player pick to computer pick 
    playerSelection.toLowerCase();
    if (playerSelection == "rock") { 
        if (computerSelection == "Paper"){
            return "computer";
        } else if (computerSelection == "Scissors"){
            return "player";
        } else { 
            return "tie";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "Paper"){
            return "tie";
        } else if (computerSelection == "Scissors"){
            return "computer";
        } else { 
            return "player";
        }
    } else if (playerSelection == "scissors"){ 
        if (computerSelection == "Paper"){
            return "player";
        } else if (computerSelection == "Scissors"){
            return "tie";
        } else { 
            return "computer";
        }
    } else { // player didnt pick from RPS
        return "error";
    }
}
//main game loop
function game() {
    let computerPoint = 0;
    let playerPoint = 0; 
    // loops 5 times
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors? ", "").toLowerCase(); // prompt user to pick RPS
        // set player and computer parameters
        let computerSelection = computerPlay(); 
        let result = playRound(playerSelection, computerSelection);
        // set player and computer scores
        // display round number
        console.log(`Round ${i+1}`)
        // checks winner
        if (result == "computer"){
            console.log(`Computer wins, ${computerSelection} beats ${playerSelection}`);
            computerPoint++; // adds a point to computer
        } else if (result == "player") {
            console.log(`Player wins, ${playerSelection} beats ${computerSelection}`);
            playerPoint++; // adds a point to player
        } else if (result == 'tie'){
            console.log(`It's a tie, both picked ${playerSelection}`);
            i -= 1; // repeats round
        } else { 
            console.log("Try again")
            i -= 1; // repeats round 
        }
        // output player and computer score
        console.log(`Player-${playerPoint} Computer-${computerPoint}`);
    } 
    if (playerPoint > computerPoint) {
        console.log("You Win! Congratulations")
    } else {
        console.log("You lose, Try Again?")
    }
}
// call game loop
console.log(game())