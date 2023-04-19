const OPTIONS = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * OPTIONS.length);

    return OPTIONS[randomNumber]; 
}

function getPlayerChoice() {
    let playerChoice = prompt('Select rock, paper, or scissors:', '')
    
    // if player cancels
    if (playerChoice == null) {
        confirmCancel = confirm('Are you sure you want to surrender?')
        
        if (confirmCancel) {
            alert('You lose!');
            return; // null
        } else getPlayerChoice();

    } else playerChoice = playerChoice.toLowerCase();
    
    if (playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors') {
        return playerChoice;
    } 
    // else {
    //     alert('Please select either: "rock", "paper", or "scissors"');
    //     return;
    // }
}