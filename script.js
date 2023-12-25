// Function to generate a random number between 1 and 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to update the dice image and display the winner
function updateDiceAndWinner() {
    const firstRandomNum = rollDice();
    const firstDiceImg = 'assets/dice' + firstRandomNum + '.png';
    document.querySelectorAll('img')[0].src = firstDiceImg;

    const secondRandomNum = rollDice();
    const secondDiceImg = 'assets/dice' + secondRandomNum + '.png';
    document.querySelectorAll('img')[1].src = secondDiceImg;

    if (firstRandomNum > secondRandomNum) {
        document.querySelector('h1').innerHTML = 'The Winner is User 1';
    } else if (secondRandomNum > firstRandomNum) {
        document.querySelector('h1').innerHTML = 'The Winner is User 2';
    } else {
        document.querySelector('h1').innerHTML = 'You are on tie';
    }
}

// Event listener for the "Roll" button
document.getElementById('rollButton').addEventListener('click', updateDiceAndWinner);
