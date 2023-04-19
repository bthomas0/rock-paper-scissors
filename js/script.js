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
        }
        else if (playerChoice.toLowerCase() === 'rock' || playerChoice.toLowerCase() === 'paper' || playerChoice.toLowerCase() === 'scissors') {
            keepAsking = false;
            return playerChoice.toLowerCase(); // either 'rock' 'paper' or 'scissors'
        }
        else {
            alert('Try again. You must select either "rock" "paper" or "scissors"');
        }
    }
}

function playRound(playerSelection, computerSelection) {
    console.log(`It's a battle between ${playerSelection} and ${computerSelection}!`);
    
    if (playerSelection === 'rock') {
        
        if (computerSelection === 'rock') {
        console.log(`DRAW! ${playerSelection} vs. ${computerSelection}`);
        } else if (computerSelection === 'paper') {
        console.log(`DEFEAT! ${computerSelection} beats ${playerSelection}`);        
        } else console.log(`VICTORY! ${playerSelection} beats ${computerSelection}`);
    } 
    else if (playerSelection === 'paper') {
    
        if (computerSelection === 'paper') {
            console.log(`DRAW! ${playerSelection} vs. ${computerSelection}`);
            } else if (computerSelection === 'scissors') {
            console.log(`DEFEAT! ${computerSelection} beats ${playerSelection}`);        
            } else console.log(`VICTORY! ${playerSelection} beats ${computerSelection}`)
    }
    else if (playerSelection === 'scissors') {
    
        if (computerSelection === 'scissors') {
            console.log(`DRAW! ${playerSelection} vs. ${computerSelection}`);
            } else if (computerSelection === 'rock') {
            console.log(`DEFEAT! ${computerSelection} beats ${playerSelection}`);        
            } else console.log(`VICTORY! ${playerSelection} beats ${computerSelection}`);

    } else console.log('There has been a grave mistake in choosing weapons.');
}

playRound(getPlayerChoice(), getComputerChoice());