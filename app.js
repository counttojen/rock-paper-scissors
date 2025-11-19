const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const body = document.querySelector("body");
const btnContainer = document.querySelector(".btnContainer")
const scoreContainer = document.createElement("div");
const humanChoiceDisplay = document.createElement("h3");
const computerChoiceDisplay = document.createElement("h3");
const roundDisplay = document.createElement("h3");
const gameWinner = document.createElement("h3");
const workspaceContainer = document.createElement("div");
const scores = document.createElement("h3");

body.appendChild(workspaceContainer);

btnContainer.append(rockBtn, paperBtn, scissorsBtn);
const rpsBtns = btnContainer.querySelectorAll("button");

rockBtn.textContent = "Rock".toUpperCase();
paperBtn.textContent = "Paper".toUpperCase();
scissorsBtn.textContent = "Scissors".toUpperCase();


workspaceContainer.appendChild(scoreContainer);
workspaceContainer.prepend(btnContainer);
workspaceContainer.prepend(roundDisplay);
workspaceContainer.append(scores);



function getHumanChoice(btn){
    let humanChoice = btn.textContent;
    console.log(`Your choice: ${humanChoice}`);
    return humanChoice;
}


function getComputerChoice(){
    let computerChoiceArray = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * computerChoiceArray.length);
    let computerChoice = computerChoiceArray[randomNumber].toUpperCase();
    console.log(`Computer choice: ${computerChoice}`);
    return computerChoice;
}




let humanScore = 0;
let computerScore = 0;
let round = 0;

scoreContainer.append(humanChoiceDisplay, computerChoiceDisplay);

humanChoiceDisplay.textContent = `Your Choice: `;
computerChoiceDisplay.textContent = `Computer Choice: `;
roundDisplay.textContent = `Round: ${round}`;
scores.textContent = `Computer Score: ${computerScore}, Your Score: ${humanScore}`;



function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log("DRAW");
        return "DRAW";
    }
    else if(
        (humanChoice === rockBtn.textContent && computerChoice === paperBtn.textContent)||
        (humanChoice === scissorsBtn.textContent && computerChoice === rockBtn.textContent)||
        (humanChoice === paperBtn.textContent && computerChoice === scissorsBtn.textContent)){
        computerScore += 1;
        console.log(`Computer Score: ${computerScore}, Your Score: ${humanScore}.`);
    }
    else {
        humanScore += 1;
        console.log(`Computer Score: ${computerScore}, Your Score: ${humanScore}`);
    }
}


rpsBtns.forEach(btn =>{
    btn.addEventListener("mouseover", ()=>{
        Object.assign(btn.style,{
            backgroundColor: "orange",
            color: "#ffffff",
            cursor: "pointer",
        })
    btn.addEventListener("mouseout", ()=>{
        Object.assign(btn.style,{
            backgroundColor: "#ffffff",
            color: "#000000",
        })
    })
    })
})

rpsBtns.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        if(humanScore === 5 || computerScore === 5){
        return;
        }
        round += 1 
        console.log(`Round: ${round}`);
      
        let humanChoice = getHumanChoice(btn)
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);

        humanChoiceDisplay.textContent = `Your Choice: ${humanChoice}`;
        computerChoiceDisplay.textContent = `Computer Choice: ${computerChoice}`;
        roundDisplay.textContent = `Round: ${round}`;
        scores.textContent = `Computer Score: ${computerScore}, Your Score: ${humanScore}`;


        if (humanScore === 5 || computerScore === 5){
            scoreContainer.append(gameWinner);
        if(humanScore > computerScore){
            gameWinner.textContent = `YOU WIN!`;
            
        }
        else if(humanScore === computerScore){
            gameWinner.textContent = "DRAW!";
            
        }
        else{
            gameWinner.textContent = `COMPUTER WINS!`;
            
        }
            Object.assign(gameWinner.style,{
                backgroundColor: "orange",
                width: "fit-content",
                padding: "10px 20px",
                color: "white",
                borderRadius: "10px",
                fontSize: "30px",
            })
    }
    }
)})

//styles

//body styles 
Object.assign(body.style,{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Elms Sans",
    marginTop: "70px",
})

//workspaceContainer styles
Object.assign(workspaceContainer.style,{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffccee",
    borderRadius: "20px",
    width: "400px",
    padding: "20px",
    boxShadow: "10px 6px 0 0 orange, -10px -6px 0 0 purple",
})

//scoreContainer styles
Object.assign(scoreContainer.style, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
})


//btn styles 
rpsBtns.forEach(btn =>{
    Object.assign(btn.style,{
        backgroundColor: "#ffffff",
        border: "none",
        margin: "8px",
        padding: "10px 20px",
        borderRadius: "10px",
        fontFamily: "Elms Sans",
        fontSize: "20px",
    })
})
