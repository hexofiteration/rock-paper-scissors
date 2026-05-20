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
    return choice;
}
console.log(getComputerChoice());

