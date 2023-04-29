const WEAPONS = ['rock', 'paper', 'scissors'];
let playerPoints = 0;
let computerPoints = 0;
let roundCount = 1;

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * WEAPONS.length);
    
    return WEAPONS[randomNumber];
}

function getPlayerChoice() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.id);
            return button.id;
        });
    });
}

// function getPlayerChoice() {
//     while (true) {
//         let playerChoice = prompt('Choose your weapon:', '');
//         if (playerChoice === null) {
//             confirmCancel = confirm('Are you sure you want to surrender?');
//             if (confirmCancel) {
//                 return 'quit';
//             }
//         } else if (playerChoice.toLowerCase() === 'rock' || playerChoice.toLowerCase() === 'paper' || playerChoice.toLowerCase() === 'scissors') {
//             return playerChoice.toLowerCase()
//         } else {
//             alert('You must select "rock" "paper" or "scissors"');
//         }
//     }
// }

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
    let keepPlaying = true;
    while (keepPlaying) { 
        if (roundCount <= 5) {  
            if (playRound(getPlayerChoice(), getComputerChoice()) === 'quit') {
                quitGame();
                return 'quit'
            }
            else {
                console.log(`Score: ${playerPoints} - ${computerPoints}\n\n`);
                roundCount += 1;
            }
        }
        else {
            keepPlaying = false;
            console.log('Final Results:');
            showFinalScore();
        }
    }
}

function showFinalScore() {
    if (playerPoints === computerPoints) {
        console.log(`IT'S A DRAW! (Final score is ${playerPoints} - ${computerPoints})`);
    } else if (playerPoints > computerPoints) {
        console.log(`PLAYER WINS! (Final score is ${playerPoints} - ${computerPoints})`);
    } else {
        console.log(`PLAYER LOSES! (Final score is ${playerPoints} - ${computerPoints})`);
    }
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
    alert('YOU QUIT! YOU LOSE THE GAME!');
}

getPlayerChoice()
//game();