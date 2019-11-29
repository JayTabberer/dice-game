let playerScore = 0
let player2score = 0

document.getElementById("button").addEventListener("click", () => {
    diceLogic(1);
});

document.getElementById("button2").addEventListener('click', () => {
    diceLogic(2);
});

let diceLogic = (playerNumber) => {
    let random = Math.floor(Math.random() * 6) +1
    const images = document.getElementById(`image${playerNumber}`);
    if (playerNumber == 1) {
        playerScore = playerScore + random;
        document.getElementById(`player${playerNumber}score`).innerHTML = `score = ${playerScore}`;
    } else {
        player2score = player2score + random;
        document.getElementById(`player${playerNumber}score`).innerHTML = `score = ${player2score}`;
    }
    images.src = `image${random}.png`;

    if (random == 1) {
        document.getElementById(`player${playerNumber}score`).innerHTML += `You lose try again`;
        clearScore()
        // button.textContent = 'try again'   
    } else if (playerScore >= 21) {
        document.getElementById(`player${playerNumber}score`).innerHTML += `You win`;
        clearScore()
        // button.textContent = 'play again'
    }
}

let clearScore = () => {
    playerScore = 0
    player2score = 0
}
