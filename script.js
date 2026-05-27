const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");
const displayDiv = document.querySelector("#display");
const playerP = document.querySelector("#player");
const computerP = document.querySelector("#computer"); 
const scoreP = document.querySelector("#score");
let humanScore = 0;
let computerScore = 0;  
let draw = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let choice = '';
    if (randomNumber === 1) {
        choice = 'Rock';
    } else if (randomNumber === 2) {
        choice = 'Paper';
    } else {
        choice = 'Scissors';
    }
    const computerChose = document.createTextNode(`${choice + " | "}`);
    computerP.appendChild(computerChose);
    return choice;
}

let humanChoice = ""

function getHumanChoice(text){
    const playerChose = document.createTextNode(text);
    playerP.appendChild(playerChose);
}

rockBtn.addEventListener("click",(event) => {
    humanChoice = "rock";
    getHumanChoice(event.target.textContent  + " | ");
    playGame();
} );
paperBtn.addEventListener("click", (event) => {
    humanChoice = "paper";
    getHumanChoice(event.target.textContent + " | ");
    playGame();
} );
scissorBtn.addEventListener("click", (event) => {
    humanChoice = "scissors";
    getHumanChoice(event.target.textContent + " | ");
    playGame();
} );



function playRound(humanChoice, computerChoice) {
    let message = '';

    if(humanChoice == computerChoice){
        return 'It\'s a draw!';
    } 

    switch(computerChoice.toLowerCase()) {
    case 'rock':
        if (humanChoice == 'scissors') {
            message = 'You Lose! Rock breaks Scissors';
        } else if (humanChoice == 'paper') {
            message = 'You Win! Paper covers Rock';
        }
        break;
    case 'paper':
        if (humanChoice == 'scissors') {
            message = 'You Win! Scissors cut Paper';
        } else if (humanChoice == 'rock') {
            message = 'You Lose! Paper covers Rock';
        }
        break;
    case 'scissors':
        if (humanChoice == 'paper') {
            message = 'You Lose! Scissors cut Paper';
        } else if (humanChoice == 'rock') {
            message = 'You Win! Rock breaks Scissors';
        }
        break;
    }
    
    return message;
}



function playGame() {

    let humanSelection = humanChoice;
    let computerSelection = getComputerChoice();
    let round = playRound(humanSelection, computerSelection);  

    if (round.includes('You Win')) {
        humanScore++;
    } else if (round.includes('You Lose')){
        computerScore++;
    } else {
        draw++;
    }    

    if(humanScore === 5){
        scoreP.textContent = "You have won the game!"
    } else if(computerScore === 5){
        scoreP.textContent = "You have lost the game!"
    } else if(draw === 5) {
        scoreP.textContent = "There's no winner!"
    } else {
        scoreP.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore} | Draws: ${draw}`;
    }
    
}

