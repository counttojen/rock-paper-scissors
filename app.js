const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const btnContainer = document.querySelector(".btnContainer")



rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";

btnContainer.append(rockBtn, paperBtn, scissorsBtn);
const rpsBtns = btnContainer.querySelectorAll("button");


function getHumanChoice(btn){
    let humanChoice = btn.textContent;
    console.log(`Human choice: ${humanChoice}`);
    return humanChoice;
}


function getComputerChoice(){
    let computerChoiceArray = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * computerChoiceArray.length);
    let computerChoice = computerChoiceArray[randomNumber];
    console.log(`Computer choice: ${computerChoice}`);
    return computerChoice;
}

let humanScore = 0;
let computerScore = 0;
let round = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log("DRAW");
        return "DRAW";
    }
    else if(
        (humanChoice === "Rock" && computerChoice === "Paper")||
        (humanChoice === "Scissors" && computerChoice === "Rock")||
        (humanChoice === "Paper" && computerChoice === "Scissors")){
        computerScore += 1;
        console.log(`Computer Score: ${computerScore}, Human Score: ${humanScore}.`);
        return computerScore;
    }
    else {
        humanScore += 1;
        console.log(`Computer Score: ${computerScore}, Human Score: ${humanScore}`);
        return humanScore;
    }
}



rpsBtns.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        if(round === 5){
        return;
        }
        round += 1 
        console.log(`Round: ${round}`);
      
        let humanChoice = getHumanChoice(btn)
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        
        if(humanScore > computerScore){
            console.log("HUMAN WINS!")
        }
        else if(humanScore === computerScore){
            console.log("DRAW!");
        }
        else{
            console.log("COMPUTER WINS!")
        }
    }
)})

