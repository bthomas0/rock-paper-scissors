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
            return playerChoice.toLowerCase(); // either 'rock' 'paper' or 'scissors'
        
        } else {
            alert('Try again. You must select either "rock" "paper" or "scissors"');
        }
    }
}

function playRound(playerSelection, computerSelection) {
    const matchInfo = `MATCHUP: ${playerSelection} vs. ${computerSelection}`;
    const drawMsg = `DRAW! (You both selected ${playerSelection}.)`;
    const defeatMsg = `DEFEAT! (${playerSelection} < ${computerSelection})`;
    const victoryMsg = `VICTORY! (${playerSelection} > ${computerSelection})`;

    if (playerSelection === computerSelection) {
        console.log(matchInfo);
        console.log(drawMsg);

    } else if (playerSelection === 'rock') {
        console.log(matchInfo);
        (computerSelection === 'paper') ? console.log(defeatMsg) : console.log(victoryMsg);
   
    } else if (playerSelection === 'paper') {
        console.log(matchInfo);
        (computerSelection === 'scissors') ? console.log(defeatMsg) : console.log(victoryMsg);
    
    } else if (playerSelection === 'scissors') {
        console.log(matchInfo);
        (computerSelection === 'rock') ? console.log(defeatMsg) : console.log(victoryMsg);
    }
}

playRound(getPlayerChoice(), getComputerChoice());