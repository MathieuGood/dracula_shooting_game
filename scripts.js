// Setting global variables
// -> Game score
let score = 0;
// -> Bat time cycle
let bat_time_cycle;
// -> Game timer cycle
let game_time_cycle;
// -> Game timer remaining time in seconds
let game_time_remaining;
// -> Boolean value that notifies end of game
let endgame;


// Getting elements
// -> start_button
let start_button = document.getElementById("start_button");
// -> bat
let bat = document.getElementById("bat");
// -> game_timer
let game_timer = document.getElementById("timer");
// -> endgame_message
let startgame_message = document.getElementById("startgame_message");
// -> endgame_message
let endgame_message = document.getElementById("endgame_message");
// -> final_score
let final_score = document.getElementById("final_score");
// -> custom_message
let custom_message = document.getElementById("custom_message");



// Hides the element given as argument by adding the class .hidden
function hideElement(element) {
    element.classList.add("hidden");
    // For debugging
    console.log("REMOVED visible FROM " + element['id']);
}

// Shows the element given as argument by removing the class .hidden
function showElement(element) {
    element.classList.remove("hidden");
    // For debugging 
    console.log("ADDED visible TO " + element['id']);
}


// Generates a random number between 0 and 100
function generateRandomPosition() {
    let random_number = Math.random() * 100;
    return random_number;
}


// Shows a bat at a random position in the window
function showBat() {
    // If the game has not ended (endgame = false)
    // Set timer to 2 seconds and hide bat when elapsed
    if (endgame == false) {
        clearTimeout(bat_time_cycle);
        bat_time_cycle = setTimeout(() => {
            hideElement(bat);
            showBat();
        }, 2500);

        // Set random position for bat
        bat.style.top = generateRandomPosition() + "%";
        bat.style.left = generateRandomPosition() + "%";
        // For debugging
        // bat.style.top = "0%";
        // bat.style.left = "0%";

        // Show bat
        showElement(bat);
    }
}


// Increments the score variable by 1 and update the display of score in top_bar
function incrementAndUpdateScore() {
    score += 1;
    let score_span = document.getElementById("score");
    score_span.textContent = score;
}


// Starts a timer for one game and displays the remaining time in game_timer element
function gameTimer() {
    // Set time for one game
    let time_remaining = 10;
    let timer = setInterval(function () {
        game_timer.innerHTML = time_remaining;
        time_remaining--;
        if (time_remaining < 0) {
            clearInterval(timer);
            // Add score to final_score
            final_score.innerHTML = score;
            // If a bat is still visible, hide it
            hideElement(bat);
            // Set the end of the game
            endgame = true;
            // Set the custom end message
            custom_message.textContent = "You are good!";
            // Display the endgame message
            showElement(endgame_message);
            // Display start_button
            showElement(start_button);

            // For debugging
            console.log("Endgame!");
        }
    }, 1000);
}


// When start_button is clicked
// -> Hide start_button
start_button.addEventListener("click", () => { hideElement(start_button); });
// -> Hide startgame_message
start_button.addEventListener("click", () => { hideElement(startgame_message); });
// -> Hide endgame_message
start_button.addEventListener("click", () => { hideElement(endgame_message); });
// -> Set endgame to false
start_button.addEventListener("click", () => { endgame = false });
// -> Show bat at random position
start_button.addEventListener("click", () => { showBat(); });
// -> Start game timer
start_button.addEventListener("click", () => { gameTimer(); });


// When bat is clicked
// -> Hide bat
bat.addEventListener("click", () => { hideElement(bat); });
// -> Increment score
bat.addEventListener("click", () => { incrementAndUpdateScore() });
// -> Show bat at random position
bat.addEventListener("click", () => { showBat(); });