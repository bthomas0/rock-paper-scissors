const OPTIONS = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * OPTIONS.length);

    return OPTIONS[randomNumber]; 
}

function getPlayerChoice() {

    let keepAsking = true;
    let playerChoice = '';

    while (keepAsking) {
        playerChoice = prompt('Choose your weapon:', '');

        if (playerChoice === null) {
            confirmCancel = confirm('Are you sure you want to surrender?');
            
            if (confirmCancel) {
                keepAsking = false;
                alert('You lose!');
                return; // null
            }

        } else if (playerChoice.toLowerCase() === 'rock' || playerChoice.toLowerCase() === 'paper' || playerChoice.toLowerCase() === 'scissors') {
            keepAsking = false;
            return playerChoice.toLowerCase();
        
        } else {
            alert('Try again. You must select either "rock" "paper" or "scissors"');
        }
    }
}