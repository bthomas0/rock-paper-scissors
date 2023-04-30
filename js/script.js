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
    if ((playerPoints <= 5) && (computerPoints <= 5)) {
        return true;
    }
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
                return 'lose';
            } else {
                console.log(victoryMsg);
                return 'win';
            }
        
        // Player selects paper
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'scissors') {
                console.log(defeatMsg);
                return 'lose';
            } else {
                console.log(victoryMsg);
                return 'win';
            }
        
        // Player selects scissors
        } else if (playerSelection === 'scissors') {
            if (computerSelection === 'rock') {
                console.log(defeatMsg);
                return 'lose';
            } else {
                console.log(victoryMsg)
                return 'win';
            }
        }
    }
}

// function game() {
//     let keepPlaying = true;
//     while (keepPlaying) { 
//         if (roundCount <= 5) {  
//             if (playRound(getPlayerChoice(), getComputerChoice()) === 'quit') {
//                 quitGame();
//                 return 'quit'
//             }
//             else {
//                 console.log(`Score: ${playerPoints} - ${computerPoints}\n\n`);
//                 roundCount += 1;
//             }
//         }
//         else {
//             keepPlaying = false;
//             console.log('Final Results:');
//             showFinalScore();
//         }
//     }
// }

// function showFinalScore() {
//     if (playerPoints === computerPoints) {
//         console.log(`IT'S A DRAW! (Final score is ${playerPoints} - ${computerPoints})`);
//     } else if (playerPoints > computerPoints) {
//         console.log(`PLAYER WINS! (Final score is ${playerPoints} - ${computerPoints})`);
//     } else {
//         console.log(`PLAYER LOSES! (Final score is ${playerPoints} - ${computerPoints})`);
//     }
// }

// function addPoint(winner) {
    
//     if (winner === 'player') {
//         playerPoints++;
//         return playerPoints;
//     } else {
//         computerPoints++;
//         return computerPoints;
//     }
// }

getPlayerChoice();