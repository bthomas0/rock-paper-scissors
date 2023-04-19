const OPTIONS = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * OPTIONS.length);

    return OPTIONS[randomNumber]; 
}

function getPlayerChoice() {
    let playerChoice;
    let keepAsking = true;

    while (keepAsking) {
        playerChoice = prompt('Select your weapon:', '')
        
        if (playerChoice == null) {
            confirmCancel = confirm('Are you sure you want to surrender?')
            if (confirmCancel) {
                alert('You lose!')
                keepAsking = false;
            }
//         } else playerChoice = playerChoice.toLowerCase();
        
//         if (playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors') {
//             return playerChoice
//         } else prompt('Please select either: rock, paper, or scissors')

    }}}