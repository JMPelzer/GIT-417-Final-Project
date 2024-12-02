"use strict";
//Dark and light Mode
const mode = document.getElementById("mode");
const heading = document.getElementById("heading");

//Game
function game() {
    let dieDisplay1 = document.getElementById("random1");
    let dieDisplay2 = document.getElementById("random2");
    let gameMessage = document.getElementById("sendItMsg");

    // Generate two random numbers between 1 and 9
    let die1 = getRandomNumber(1, 9);
    let die2 = getRandomNumber(1, 9);

    // Display those numbers to the screen
    dieDisplay1.innerHTML = die1;
    dieDisplay2.innerHTML = die2;

    // Check if both dice show 4
    if (die1 === 4 && die2 === 4) {
        gameMessage.innerHTML = "Send It! You Win!";
        gameMessage.style.color = "green";
    } else {
        gameMessage.innerHTML = "Sorry. Try Again.";
        gameMessage.style.color = "red";
    }
}

// Helper function to generate random numbers
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}











//Event Listeners

//Dark and light mode
mode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    heading.textContent = isDarkMode ? "Dark Mode" : "Light Mode";
    document.title = isDarkMode ? "Dark Mode" : "Light Mode";
    mode.textContent = isDarkMode ? "🌜" : "🌞";
});

//For Sent It game
document.getElementById("gamePlay").addEventListener("click", game);