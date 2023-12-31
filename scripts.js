// Setting global variables
// -> Game score
let score;
// -> Bat time cycle
let bat_time_cycle;
// -> Game timer cycle
let game_time_cycle;
// -> Game timer remaining time in seconds
let game_time_remaining;
// -> Boolean value that marks end of game
let endgame;

// Setting sound library
// -> Evil laugh
let evil_laugh = new Audio('media/evil-laugh.mp3');
// -> Spooky music
let spooky_music = new Audio('media/spooky-music.mp3');


// Getting elements
// -> start_button
let game_window = document.getElementById("game_window");
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


// Generates a random number between min and max
function generateRandomPosition(min, max) {
    let random_number = Math.random() * (max - min) + min;
    return random_number;
}


// Shows a bat at a random position in the window
function showBat() {
    // If the game has not ended (endgame = false)
    // Set timer to 2 seconds and hide bat when elapsed
    if (endgame == false) {
        clearTimeout(bat_time_cycle);
        bat_time_cycle = setTimeout(() => {
            showBat();
        }, 4000);

        // Set random position for bat
        bat.style.top = generateRandomPosition(0, 80) + "vh";
        bat.style.left = generateRandomPosition(0, 90) + "vw";

        // For debugging
        // bat.style.top = "80vh";
        // bat.style.left = "90vw";

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


function getCustomMessage(score) {
    // Default message if score == 0
    let msg = "No hit? Poor soul, you world will be destroyed soon!"
    if (score == 1)
        msg = "Just one? Dracula is not impressed by you!"
    else if (score < 6)
        msg = "Not enough to save the world, Dracula will live on."
    else if (score < 11)
        msg = "Nice try, but more strength is needed to beat Dracula!"
    else if (score < 16)
        msg = "You are very close to ending this, Dracula is getting weak!"
    else if (score < 25)
        msg = "Almost perfect, Dracula will not regenerate for centuries!"
    else if (score > 35)
        msg = "You did it! Dracula has been beaten and will never return!"
    return msg;
}

// Starts a timer for one game and displays the remaining time in game_timer element
function gameTimer() {

    //For debugging
    console.log("GAME START");

    // Change the cursor to a crosshair
    game_window.classList.add("crosshair")

    // Play evil laughing sound and spooky music
    evil_laugh.play();
    spooky_music.play();

    // Reset score to 0 and endgame to false
    score = 0;
    endgame = false;

    // Set time for one game
    let time_remaining = 60;
    // Display time remaining in top_bar
    game_timer.innerHTML = time_remaining;

    // Start a 1 second timer
    let timer = setInterval(function () {
        // Decrement time 
        time_remaining--;
        // Update time remaining displayed in top_bar
        game_timer.innerHTML = time_remaining;

        // When time_remaining is over
        if (time_remaining < 1) {
            // Reset the timer
            clearInterval(timer);
            // Remove the crosshair cursor
            game_window.classList.remove("crosshair");
            // Add score to final_score
            final_score.innerHTML = score;
            // In case a bat is still visible, hide it
            hideElement(bat);
            // Set the end of the game
            endgame = true;
            // Set the custom end message
            custom_message.textContent = getCustomMessage(score);
            // Display the endgame message
            showElement(endgame_message);
            // Display start_button
            showElement(start_button);

            // For debugging
            console.log("GAME END");
        }
        // 1 second interval
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
// -> Start game timer
start_button.addEventListener("click", () => { gameTimer(); });
// -> Show bat at random position
start_button.addEventListener("click", () => { showBat(); });



// When bat is clicked
// -> Hide bat
bat.addEventListener("click", () => { hideElement(bat); });
// -> Increment score
bat.addEventListener("click", () => { incrementAndUpdateScore() });
// -> Show bat at random position
bat.addEventListener("click", () => { showBat(); });
// -> Play gun shot sound
bat.addEventListener("click", () => { let gun_shot = new Audio('media/gun-shot.mp3'); gun_shot.play(); });