const time = document.getElementById('timeDisplay');

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',hour12: true }).replace("AM", "").replace("PM", "")
    time.innerText = timeString
}

export function startUpdatingClock() {
    updateTime();
    setInterval(updateTime, 1000);
}