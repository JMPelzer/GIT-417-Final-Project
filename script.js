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
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Switch Product 1-3 Christmas selection
function switchProductSet1(event) {
    // Get all the product sections
    let products = document.querySelectorAll("#Christmas section");

    // Hide all the products first
    products.forEach(product => {
        product.classList.add("hiddenItem");
        product.classList.remove("currentItem");
    });

    // Show the selected product based on the clicked button
    if (event.target.id === "btn1") {
        document.getElementById("product1").classList.remove("hiddenItem");
        document.getElementById("product1").classList.add("currentItem");
    } else if (event.target.id === "btn2") {
        document.getElementById("product2").classList.remove("hiddenItem");
        document.getElementById("product2").classList.add("currentItem");
    } else if (event.target.id === "btn3") {
        document.getElementById("product3").classList.remove("hiddenItem");
        document.getElementById("product3").classList.add("currentItem");
    }
}

//Switch Product 4-6 Mountain Bikes
function switchProductSet2(event) {
    //Get all the product sections
    let products = document.querySelectorAll("#mtb-bikes section");

    // Hide all the products first
    products.forEach(product => {
        product.classList.add("hiddenItem");
        product.classList.remove("currentItem");
    });

    // Show the selected product based on the clicked button
    if (event.target.id === "btn4") {
        document.getElementById("product4").classList.remove("hiddenItem");
        document.getElementById("product4").classList.add("currentItem");
    } else if (event.target.id === "btn5") {
        document.getElementById("product5").classList.remove("hiddenItem");
        document.getElementById("product5").classList.add("currentItem");
    } else if (event.target.id === "btn6") {
        document.getElementById("product6").classList.remove("hiddenItem");
        document.getElementById("product6").classList.add("currentItem");
    }
}

//Switch Product 7-9 Road Bikes
function switchProductSet3(event) {
    //Get all the product sections
    let products = document.querySelectorAll("#rd-bikes section");

    // Hide all the products first
    products.forEach(product => {
        product.classList.add("hiddenItem");
        product.classList.remove("currentItem");
    });

    // Show the selected product based on the clicked button
    if (event.target.id === "btn7") {
        document.getElementById("product7").classList.remove("hiddenItem");
        document.getElementById("product7").classList.add("currentItem");
    } else if (event.target.id === "btn8") {
        document.getElementById("product8").classList.remove("hiddenItem");
        document.getElementById("product8").classList.add("currentItem");
    } else if (event.target.id === "btn9") {
        document.getElementById("product9").classList.remove("hiddenItem");
        document.getElementById("product9").classList.add("currentItem");
    }
}

//Switch Product 10-12 Kids Bikes
function switchProductSet4(event) {
    //Get all the product sections
    let products = document.querySelectorAll("#kidsBikes section");

    // Hide all the products first
    products.forEach(product => {
        product.classList.add("hiddenItem");
        product.classList.remove("currentItem");
    });

    // Show the selected product based on the clicked button
    if (event.target.id === "btn10") {
        document.getElementById("product10").classList.remove("hiddenItem");
        document.getElementById("product10").classList.add("currentItem");
    } else if (event.target.id === "btn11") {
        document.getElementById("product11").classList.remove("hiddenItem");
        document.getElementById("product11").classList.add("currentItem");
    } else if (event.target.id === "btn12") {
        document.getElementById("product12").classList.remove("hiddenItem");
        document.getElementById("product12").classList.add("currentItem");
    }
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

//Switch of Christmas Products
document.getElementById("christmasButtons").addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        switchProductSet1(event);
    }
});

//Switch of Mountain Bike Products
document.getElementById("mtbButtons").addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        switchProductSet2(event);
    }
});

//Switch of Road Bike Products
document.getElementById("roadButtons").addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        switchProductSet3(event);
    }
});

//Switch of Kids Bike Products
document.getElementById("kidsButtons").addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        switchProductSet4(event);
    }
});

//For Sent It game
document.getElementById("gamePlay").addEventListener("click", game);