const OPTIONS = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * OPTIONS.length);

    return OPTIONS[randomNumber]; 
}

function getPlayerChoice() {
    let playerChoice = prompt('Select your weapon:', '');
    playerChoice = playerChoice.toLowerCase()
    if (playerChoice == 'rock') {
        console.log('success!');
    }
    //return playerChoice;
}