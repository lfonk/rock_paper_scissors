//creating a function that will output R, P or S
function computerPlay() { 
    //Set RPS as numbers three numerical numbers 
    let pick = Math.floor(Math.random()*3)
    // output rock if zero
    if (pick == 0){
        console.log("Rock");

    } else if (pick == 1) { //output paper if 1
        console.log("Paper");
    } else {
        console.log("Scissors"); // output scissors if 2
    }
}