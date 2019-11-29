let playerScore = 0
let player2score = 0

document.getElementById("button").addEventListener("click", () => {
    let random = Math.floor(Math.random() * 6) +1
    const dices = document.getElementById("button").textContent = 'roll';
    const images = document.getElementById("image");
    playerScore = playerScore + random;
    document.getElementById(`player1score`).innerHTML = `score = ${playerScore}`;
    images.src = `image${random}.png`;

    if (random == 1 && playerScore < 20) {
        document.getElementById('dice').innerHTML += `You lose try again`;
        button.textContent = 'try again'
        total = 0;
    } else if (playerScore >= 20) {
        document.getElementById('dice').innerHTML += `You win`;
        button.textContent = 'play again'
        total = 0;
    }

});



