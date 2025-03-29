let countdown;
let totalSeconds;
let isPaused = false;

const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

const displayHours = document.getElementById("display-hours");
const displayMinutes = document.getElementById("display-minutes");
const displaySeconds = document.getElementById("display-seconds");

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
    if (countdown) clearInterval(countdown);  // Prevent multiple intervals

    let hours = parseInt(document.getElementById("hours").value);
    let minutes = parseInt(document.getElementById("minutes").value);
    let seconds = parseInt(document.getElementById("seconds").value);

    totalSeconds = hours * 3600 + minutes * 60 + seconds;
    
    if (totalSeconds <= 0) {
        alert("Please select a valid time.");
        return;
    }

    isPaused = false;
    countdown = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    if (totalSeconds > 0 && !isPaused) {
        totalSeconds--;

        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;

        displayHours.textContent = String(hours).padStart(2, "0");
        displayMinutes.textContent = String(minutes).padStart(2, "0");
        displaySeconds.textContent = String(seconds).padStart(2, "0");
    } else {
        clearInterval(countdown);
    }
}

function pauseTimer() {
    isPaused = !isPaused;
    pauseBtn.textContent = isPaused ? "Resume" : "Pause";
}

function resetTimer() {
    clearInterval(countdown);
    totalSeconds = 0;
    displayHours.textContent = "00";
    displayMinutes.textContent = "00";
    displaySeconds.textContent = "00";
    pauseBtn.textContent = "Pause";
}
