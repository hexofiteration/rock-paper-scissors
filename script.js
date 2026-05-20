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

function playRound(humanChoice, computerChoice) {
    let message = '';

    if(humanChoice === computerChoice){
        return 'It\'s a draw!';
    } 

    switch(computerChoice) {
    case 'rock':
        if (humanChoice === 'scissors') {
            message = 'You Lose! Rock breaks Scissors';
        } else if (humanChoice === 'paper') {
            message = 'You Win! Paper covers Rock';
        }
        break;
    case 'paper':
        if (humanChoice === 'scissors') {
            message = 'You Win! Scissors cut Paper';
        } else if (humanChoice === 'rock') {
            message = 'You Lose! Paper covers Rock';
        }
        break;
    case 'scissors':
        if (humanChoice === 'paper') {
            message = 'You Lose! Scissors cut Paper';
        } else if (humanChoice === 'rock') {
            message = 'You Win! Rock breaks Scissors';
        }
        break;
    }
    
    return message;
}



function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let draw = 0;
      
    for (let index = 0; index < 5; index++) { 
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        let round = playRound(humanSelection, computerSelection);  
        
        console.log(round);

        if (round.includes('You Win')) {
            humanScore++;
        } else if (round.includes('You Lose')){
            computerScore++;
        } else {
            draw++;
        }   
    }
    
    console.log(humanScore);
    console.log(computerScore);
    console.log(draw);
}

playGame();