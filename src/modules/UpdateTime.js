const time = document.getElementById('timeDisplay');
const gradient = document.getElementById('gradient');

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',hour12: true }).replace("AM", "").replace("PM", "")
    time.innerText = timeString

    const hours = now.getHours() + (now.getMinutes() / 60) + (now.getSeconds() / 3600)
    gradient.style.transform = `translateY(-${hours * 100}vh)`
}

export function startUpdatingClock() {
    updateTime();
    setInterval(updateTime, 1000);
}