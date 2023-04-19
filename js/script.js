const WEAPONS = ['rock', 'paper', 'scissors'];
let playerPoints = 0;
let computerPoints = 0;
let roundCount = 1;

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * WEAPONS.length);

    return WEAPONS[randomNumber]; 
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
                return 'quit';
            }
            
        } else if (playerChoice.toLowerCase() === 'rock' || playerChoice.toLowerCase() === 'paper' || playerChoice.toLowerCase() === 'scissors') {
            keepAsking = false;
            return playerChoice.toLowerCase(); // 'rock' || 'paper' || 'scissors'
        
        } else {
            alert('You must select "rock" "paper" or "scissors"');
        }
    }
}

function playRound(playerSelection, computerSelection) {
    const matchInfo = `ROUND ${roundCount}: ${playerSelection} vs. ${computerSelection}`;
    const drawMsg = `DRAW! (You both selected ${playerSelection})`;
    const defeatMsg = `DEFEAT! (${playerSelection} < ${computerSelection})`;
    const victoryMsg = `VICTORY! (${playerSelection} > ${computerSelection})`;

    if (playerSelection === 'quit') {
        return 'quit';
    }

    if (playerSelection === computerSelection) {
        console.log(matchInfo);
        console.log(drawMsg);

    } else if (playerSelection === 'rock') {
        console.log(matchInfo);
        (computerSelection === 'paper') ? (console.log(defeatMsg), addPoint('computer')) : (console.log(victoryMsg), addPoint('player'));
   
    } else if (playerSelection === 'paper') {
        console.log(matchInfo);
        (computerSelection === 'scissors') ? (console.log(defeatMsg), addPoint('computer')) : (console.log(victoryMsg), addPoint('player'));
    
    } else if (playerSelection === 'scissors') {
        console.log(matchInfo);
        (computerSelection === 'rock') ? (console.log(defeatMsg), addPoint('computer')) : (console.log(victoryMsg), addPoint('player'));
    }
}

function game() {

    for (let roundsPlayed = 1; roundsPlayed <= 5; roundsPlayed++) {
        if (playRound(getPlayerChoice(), getComputerChoice()) === 'quit') {
            quitGame();
            break;
        }
        else {
        roundCount++;
        console.log(`Score: ${playerPoints} - ${computerPoints}`);
        }
    }
    // calcTotalPoints();
}

function addPoint(winner) {
    
    if (winner === 'player') {
        playerPoints++;
        return playerPoints;
    } else {
        computerPoints++;
        return computerPoints;
    }
}

function quitGame() {
    alert('YOU LOSE THE GAME!');
}

game();