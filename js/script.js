/* TODO:
* handle 'quit'
* play again?
*
*/

const WEAPONS = ['rock', 'paper', 'scissors'];
const output = document.getElementById('output');
const score = document.getElementById('score');
const originalLayout = document.getElementById('layout');
const layout = document.getElementById('layout');
const containers = document.getElementsByClassName('container');

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

function displayWinRound(message) {
    output.textContent = message;
    output.className = 'win';
    console.log(message);
    addPoint('player');
    if (playerPoints >= 5) {
        displayEndOfGameWin();
    } else displayScore();
}

function displayLoseRound(message) {
    output.textContent = message;
    output.className = 'lose';
    addPoint('computer');
    if (computerPoints >= 5) {
        displayEndOfGameLose();
    } else displayScore();
}

function displayDrawRound(message) {
    output.textContent = message;
    output.className = 'draw';
    displayScore();
}

function displayQuitGame() {
    if (confirm('Are you sure you want to surrender?')) {
        const quitMessage = layout.textContent = `YOU LOSE! (...because you're a quitter!)`;
        layout.textContent = quitMessage;
        document.body.style.backgroundColor = '#ff0000';
    }
}

function displayEndOfGameWin() {
    const winMessage = layout.textContent = `YOU WIN! (Final score is ${playerPoints} - ${computerPoints})`;
    layout.textContent = winMessage;
    document.body.style.backgroundColor = '#00ff00';
}

function displayEndOfGameLose() {
    const loseMessage = layout.textContent = `YOU LOSE! (Final score is ${playerPoints} - ${computerPoints})`;
    layout.textContent = loseMessage;
    document.body.style.backgroundColor = '#ff0000';
}

function playRound(playerSelection, computerSelection) {
    const drawMsg = `DRAW! (You both selected ${playerSelection})`;
    const defeatMsg = `DEFEAT! (${playerSelection} < ${computerSelection})`;
    const victoryMsg = `VICTORY! (${playerSelection} > ${computerSelection})`;

    if (playerSelection === 'quit') {
        displayQuitGame()
    }
    if (playerSelection === computerSelection) {
        displayDrawRound(drawMsg);
    // Player selects rock
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            displayLoseRound(defeatMsg);
        } else {
            displayWinRound(victoryMsg);
        }
    // Player selects paper
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            displayLoseRound(defeatMsg);
        } else {
            displayWinRound(victoryMsg);
        }
    // Player selects scissors
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            displayLoseRound(defeatMsg);
        } else {
            displayWinRound(victoryMsg);
        }
    }
}

getPlayerChoice();


// I could hide everything, or just delete it and then refresh...