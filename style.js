const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    game(button.id);
    show(button.id);
  });
}); //iterates each button

const scoreT = document.getElementById('scoreT')
const roundT = document.getElementById('roundT')
const text = document.getElementById('text')
const winnerT = document.getElementById('winnerT')

let computerPoint = 0;
let playerPoint = 0;
let round = 1 

//creating a function that will output R, P or S
function computerPlay() { 
    //Set RPS as numbers three numerical numbers 
    let pick = Math.floor(Math.random()*3)
    // output rock if zero
    if (pick == 0) {
        document.getElementById('paperC').style.display = 'block';
        document.getElementById('rockC').style.display = 'none';
        document.getElementById('scissorsC').style.display = 'none';
        return "Paper"
    } else if (pick == 1) {
        document.getElementById('rockC').style.display = 'block';
        document.getElementById('paperC').style.display = 'none';
        document.getElementById('scissorsC').style.display = 'none';
        return "Rock"
    } else {
        document.getElementById('scissorsC').style.display = 'block';
        document.getElementById('rockC').style.display = 'none';
        document.getElementById('paperC').style.display = 'none';
        return "Scissors"
    }
}

function show(playerSelection) {
    if (playerSelection == "rock") {
        document.getElementById('rockP').style.display = 'block';
        document.getElementById('paperP').style.display = 'none';
        document.getElementById('scissorsP').style.display = 'none';
    } else if (playerSelection == "paper") {
        document.getElementById('paperP').style.display = 'block';
        document.getElementById('rockP').style.display = 'none';
        document.getElementById('scissorsP').style.display = 'none';
    } else {
        document.getElementById('scissorsP').style.display = 'block';
        document.getElementById('rockP').style.display = 'none';
        document.getElementById('paperP').style.display = 'none';
    }
}

// function that will play RPS (only 1 round)
function playRound(playerSelection, computerSelection){ 
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
    } else { 
        if (computerSelection == "Paper"){
            return "player";
        } else if (computerSelection == "Scissors"){
            return "tie";
        } else { 
            return "computer";
        }
    } 
}

function winner() {
    if (computerPoint == 5 || playerPoint == 5) {
        
        if (playerPoint > computerPoint) {
            reset()
            return ("You Win! Congratulations")
            
        } else {
            reset()
            return ("You lose, Try Again?")
        }
    } else {
        return ""
    }
}

function reset() {
    computerPoint = 0;
    playerPoint = 0; 
    round = 1;
}


function game(playerSelection) {
    let computerSelection = computerPlay(); 
    let result = playRound(playerSelection, computerSelection);
    roundT.textContent = `Round ${round}`
    if (result == "computer"){
        text.textContent = `Computer wins, ${computerSelection} beats ${playerSelection}`;
        computerPoint++;
        round++; // adds a point to computer
    } else if (result == "player") {
        text.textContent = `Player wins, ${playerSelection} beats ${computerSelection}`;
        playerPoint++; // adds a point to player
        round++;
    } else if (result == 'tie'){
        text.textContent =`It's a tie, both picked ${playerSelection}`;
        //i -= 1; // repeats round
    } else { 
        console.log("Try again")
        //i -= 1; // repeats round 
    }
    // output player and computer score
    scoreT.textContent = `Player-${playerPoint} Computer-${computerPoint}`;
    winnerT.textContent = winner();
}    