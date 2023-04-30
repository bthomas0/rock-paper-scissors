const WEAPONS = ['rock', 'paper', 'scissors'];
let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * WEAPONS.length);
    
    return WEAPONS[randomNumber];
}

function getPlayerChoice() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            playRound(e.target.id, getComputerChoice());
        })
    })
}

function evalGameContinue() {
    if ((playerPoints < 5) && (computerPoints < 5)) {
        return true;
    }
}

function addPoint(winner) {
    if (winner === 'player') {
        playerPoints += 1;
    } else if (winner === 'computer') {
        computerPoints += 1;
    }
}

function displayScore() {
    console.log(`${playerPoints} - ${computerPoints}`);
}

function playRound(playerSelection, computerSelection) {
    const drawMsg = `DRAW! (You both selected ${playerSelection})`;
    const defeatMsg = `DEFEAT! (${playerSelection} < ${computerSelection})`;
    const victoryMsg = `VICTORY! (${playerSelection} > ${computerSelection})`;
    
    if (evalGameContinue() === true) {

        if (playerSelection === 'quit') {
            console.log('quit');
            return 'quit';
        }
        if (playerSelection === computerSelection) {
            console.log(drawMsg);
        
        // Player selects rock
        } else if (playerSelection === 'rock') {
            if (computerSelection === 'paper') {
                console.log(defeatMsg);
                addPoint('computer');
                displayScore();
            } else {
                console.log(victoryMsg);
                addPoint('player');
                displayScore();
            }
        
        // Player selects paper
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'scissors') {
                console.log(defeatMsg);
                addPoint('computer');
                displayScore();
            } else {
                console.log(victoryMsg);
                addPoint('player');
                displayScore();
            }
        
        // Player selects scissors
        } else if (playerSelection === 'scissors') {
            if (computerSelection === 'rock') {
                console.log(defeatMsg);
                addPoint('computer');
                displayScore();
            } else {
                console.log(victoryMsg);
                addPoint('player');
                displayScore();
            }
        }
    }
}

// function showFinalScore() {
//     if (playerPoints === computerPoints) {
//         console.log(`IT'S A DRAW! (Final score is ${playerPoints} - ${computerPoints})`);
//     } else if (playerPoints > computerPoints) {
//         console.log(`PLAYER WINS! (Final score is ${playerPoints} - ${computerPoints})`);
//     } else {
//         console.log(`PLAYER LOSES! (Final score is ${playerPoints} - ${computerPoints})`);
//     }
// }

getPlayerChoice();