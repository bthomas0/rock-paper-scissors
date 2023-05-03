/* TODO:
* handle 'quit'
* handle 'end of game'
* play again?
* 
*
*
*/

const WEAPONS = ['rock', 'paper', 'scissors'];
const output = document.getElementById('output');
const score = document.getElementById('score');
const originalLayout = document.getElementById('layout');
const layout = document.getElementById('layout');
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

function addPoint(winner) {
    if (winner === 'player') {
        playerPoints += 1;
    } else if (winner === 'computer') {
        computerPoints += 1;
    }
}

function displayScore() {
    score.textContent = (`${playerPoints} - ${computerPoints}`);
}

function displayWinScenario(message) {
    output.textContent = message;
    output.className = 'win';
    console.log(message);
    addPoint('player');
    if (playerPoints >= 5) {
        displayEndOfGameScenario();
    } else displayScore();
}

function displayLoseScenario(message) {
    output.textContent = message;
    output.className = 'lose';
    addPoint('computer');
    if (computerPoints >= 5) {
        displayEndOfGameScenario();
    } else displayScore();
}

function displayDrawScenario(message) {
    output.textContent = message;
    output.className = 'draw';
    displayScore();
}

function displayQuitScenario() {
    if (confirm('Are you sure you want to quit?')) {
        console.log('yes');
        // go to end of game (losing) scenario
    }
}

function displayEndOfGameScenario() {
    if (playerPoints > computerPoints) {
        layout.textContent = `YOU WIN! (Final score is ${playerPoints} - ${computerPoints})`;
    } else {
        layout.textContent = `YOU LOSE! (Final score is ${playerPoints} - ${computerPoints})`;
    }
}

function playRound(playerSelection, computerSelection) {
    const drawMsg = `DRAW! (You both selected ${playerSelection})`;
    const defeatMsg = `DEFEAT! (${playerSelection} < ${computerSelection})`;
    const victoryMsg = `VICTORY! (${playerSelection} > ${computerSelection})`;

    if (playerSelection === 'quit') {
        displayQuitScenario()
    }
    if (playerSelection === computerSelection) {
        displayDrawScenario(drawMsg);
    // Player selects rock
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            displayLoseScenario(defeatMsg);
        } else {
            displayWinScenario(victoryMsg);
        }
    // Player selects paper
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            displayLoseScenario(defeatMsg);
        } else {
            displayWinScenario(victoryMsg);
        }
    // Player selects scissors
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            displayLoseScenario(defeatMsg);
        } else {
            displayWinScenario(victoryMsg);
        }
    }
}

getPlayerChoice();