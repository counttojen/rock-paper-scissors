// Define choices: Rock, Paper, Scissors
// Create function to generate computer choice randomly
// Return Rock, Paper, or Scissors based on random number



let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors"

function getComputerChoice(){
    let randomNumber = Math.floor((Math.random()) * 3) +1;
    if(randomNumber === 1){
        console.log(`Computer choice: ${rock}`)
        return rock;
    }
    else if(randomNumber === 2){
        console.log(`Computer choice: ${paper}`);
        return paper;
    }
    else if(randomNumber === 3){
        console.log(`Computer choice: ${scissors}`);
        return scissors;
    }

}

// Create function to get human choice from input
// Standardize input and return Rock, Paper, or Scissors



function getHumanChoice(){
    let input = (window.prompt(
        "Enter 1 for rock, 2 for paper, or 3 for scissors. Otherwise, enter 'rock, 'paper', or 'scissors'"));

    input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    if(input === "1" || input === "Rock"){
        console.log(`Human choice: ${rock}`);
        return rock;
    }
    else if(input === "2" || input === "Paper"){
        console.log(`Human choice: ${paper}`);
        return paper;
    }
    else if(input === "3" || input === "Scissors"){
        console.log(`Human choice: ${scissors}`);
        return scissors;
    } 
}


// Create variables to keep track of scores
// Create function to play one round
// Compare human choice and computer choice
// Update scores based on who wins
// Log win/lose/draw messages
// Call functions to get choices and play a round


let humanScore = 0;
let computerScore = 0;
// let humanChoice = getHumanChoice();
// let computerChoice = getComputerChoice();
let roundWinner;

function playRound(humanChoice, computerChoice){

    if((humanChoice === "Rock" && computerChoice === "Paper") || 
        (humanChoice === "Paper" && computerChoice === "Scissors") || 
        (humanChoice === "Scissors" && computerChoice === "Rock")){
        computerScore += 1;
        roundWinner = `Computer wins. Computer score: ${computerScore}`;
    }

    else if((humanChoice === "Rock" && computerChoice === "Scissors") || 
    (humanChoice === "Paper" && computerChoice === "Rock") || 
    (humanChoice === "Scissors" && computerChoice === "Paper")){
        humanScore += 1;
        roundWinner = `Human wins. Human score: ${humanScore}`;
    }

    else if(humanChoice === computerChoice){
        roundWinner = "DRAW";
    }

    console.log(roundWinner);
    return roundWinner;
    
}

// Set rounds and winner
// Loop through rounds and play
// Decide and show final winner


let rounds = 5;
let finalWinner;


function playGame(){
    for(let round = 1; round <= rounds; round++){
        console.log(`Round: ${round}`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        
    }
    if(humanScore > computerScore){
        finalWinner = `Human wins with ${humanScore} to ${computerScore}`;
    }
    else if(humanScore < computerScore){
        finalWinner = `Computer wins with ${computerScore} to ${humanScore}`;
    }
    else if(humanScore === computerScore){
        finalWinner = `GAME DRAW`;
    }

    console.log(finalWinner);
    return finalWinner;
}


playGame();