let timer;
const initialTime = 1200;
let seconds = initialTime;

function startTimer() {
    if (!timer) {
        timer = setInterval(() => {
            if (seconds > 0) {
                seconds--;
                document.getElementById('display').textContent = formatTime(seconds);
            } else {
                stopTimer();
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    seconds = initialTime;
    document.getElementById('display').textContent = formatTime(seconds);
}

function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;
    return `${pad(mins)}:${pad(secs)}`;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}