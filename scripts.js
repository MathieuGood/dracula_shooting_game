// Setting global variables
// -> Game score
let score = 0;
// -> Bat time cycle
let bat_time_cycle;
// -> Game timer cycle
let game_time_cycle;
// -> Game timer remaining time in seconds
let game_time_remaining;


// Getting elements
// -> start_button
let start_button = document.getElementById("start_button");
// -> bat
let bat = document.getElementById("bat");
// -> game_timer
let game_timer = document.getElementById("timer");
// -> endgame_window
let endgame_window = document.getElementById("endgame_message");
// -> final_score
let final_score = document.getElementById("final_score");



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

// Starts a timer for one game and displays the remaining time in game_timer element
function gameTimer() {
    let time_remaining = 30;
    let timer = setInterval(function () {
        game_timer.innerHTML = time_remaining;
        time_remaining--;
        if (time_remaining < 0) {
            clearInterval(timer);
            // Add score to final_score
            final_score.innerHTML = score;
            showElement(endgame_window);
        }
    }, 1000);
}

// Increments the score variable by 1 and update the display of score in top_bar
function incrementAndUpdateScore() {
    score += 1;
    let score_span = document.getElementById("score");
    score_span.textContent = score;
}

// Shows a bat at a random position in the window
function showBat() {
    // Set timer to 2 seconds and hide bat when elapsed
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


// When start_button is clicked
// -> Hide start_button
start_button.addEventListener("click", () => { hideElement(start_button); });
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