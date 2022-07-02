const rock = document.getElementById('rock')
rock.addEventListener('click', function() {
    game("rock")
});
const paper = document.getElementById('paper')
paper.addEventListener('click', function() {
    game("paper")
});
const scissors = document.getElementById('scissors')
scissors.addEventListener('click', function() {
    game("scissors")
});
let computerPoint = 0;
let playerPoint = 0;
let round = 1 

//creating a function that will output R, P or S
function computerPlay() { 
    //Set RPS as numbers three numerical numbers 
    let pick = Math.floor(Math.random()*3)
    // output rock if zero
    return (pick == 0) ?  "Paper" : (pick == 1) ? "Rock" : "Scissors"; 
}

// function that will play RPS (only 1 round)
function playRound(playerSelection, computerSelection){
// set player and computer parameters 
// compare player pick to computer pick 
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

function winner() {
    if (computerPoint == 5 || playerPoint == 5) {
        
        if (playerPoint > computerPoint) {
            computerPoint = 0;
            playerPoint = 0; 
            round = 1;
            return ("You Win! Congratulations")
            
        } else {
            computerPoint = 0;
            playerPoint = 0; 
            round = 1;
            return ("You lose, Try Again?")
        }
        
    } else {
        return ""
    }
}
function game(playerSelection) {
    let computerSelection = computerPlay(); 
        let result = playRound(playerSelection, computerSelection);
        console.log(`Round ${round}`)
        if (result == "computer"){
            console.log(`Computer wins, ${computerSelection} beats ${playerSelection}`);
            computerPoint++;
            round++; // adds a point to computer
        } else if (result == "player") {
            console.log(`Player wins, ${playerSelection} beats ${computerSelection}`);
            playerPoint++; // adds a point to player
            round++;
        } else if (result == 'tie'){
            console.log(`It's a tie, both picked ${playerSelection}`);
            //i -= 1; // repeats round
        } else { 
            console.log("Try again")
            //i -= 1; // repeats round 
        }
            // output player and computer score
        console.log(`Player-${playerPoint} Computer-${computerPoint}`);
        console.log(winner())
}    