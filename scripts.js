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

function startGameTimer() {
    let game_duration = 60;


}

// Increments the score variable by 1 and update the display of score in top_bar
function incrementAndUpdateScore() {
    score += 1;
    let score_span = document.getElementById("score");
    score_span.textContent = score;
}

// NOT WORKING
// Starts a timer 
function setTimer(timer_cycle_variable, duration_in_seconds, action_when_time_elapsed) {
    clearTimeout(timer_cycle_variable);
    timer_cycle_variable = setTimeout(() => { action_when_time_elapsed }, duration_in_seconds);
    console.log(timer_cycle_variable);
    return timer_cycle_variable;
}

// Shows a bat at a random position in the window
function showBat() {

    // NOT WORKING
    // Using setTimer function to time bat appearance
    // setTimer(bat_time_cycle, 2000, showBat()));
    
    
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
start_button.addEventListener("click", () => { setTimeout(() => {console.log("Game time elapsed")}, 1000); });


// When bat is clicked
// -> Hide bat
bat.addEventListener("click", () => { hideElement(bat); });
// -> Increment score
bat.addEventListener("click", () => { incrementAndUpdateScore() });
// -> Show bat at random position
bat.addEventListener("click", () => { showBat(); });
