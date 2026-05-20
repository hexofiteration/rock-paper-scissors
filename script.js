function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let choice = '';
    if (randomNumber === 1) {
        choice = 'rock';
    } else if (randomNumber === 2) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    }
    console.log(`Computer chose: ${choice}`)
    return choice;
}


function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors");
    console.log(`You chose: ${choice}`)
    return choice.toLowerCase();
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let message = '';

    if(humanChoice === computerChoice){
            return 'It\'s a draw!';
        } 

    switch(computerChoice) {
    case 'rock':
        if (humanChoice === 'scissors') {
            message = 'You lose! Rock breaks Scissors';
            computerScore++;
        } else if (humanChoice === 'paper') {
            message = 'You Win! Paper covers Rock';
            humanScore++;
        }
        break;
    case 'paper':
        if (humanChoice === 'scissors') {
            message = 'You Win! Scissors cut Paper';
            humanScore++;
        } else if (humanChoice === 'rock') {
            message = 'You lose! Paper covers Rock';
            computerScore++;
        }
        break;
    case 'scissors':
        if (humanChoice === 'paper') {
            message = 'You lose! Scissors cut Paper';
            computerScore++;
        } else if (humanChoice === 'rock') {
            message = 'You Win! Rock breaks Scissors';
            humanScore++;
        }
        break;
    }
    return message;

}

console.log(playRound(getHumanChoice(), getComputerChoice()));