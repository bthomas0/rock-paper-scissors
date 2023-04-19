const OPTIONS = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * OPTIONS.length);

    return OPTIONS[randomNumber]; 
}