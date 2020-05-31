const time = document.getElementById('timeDisplay');
const gradient = document.getElementById('gradient');
const effectsLayer = document.getElementById('effectsLayer');

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',hour12: true }).replace("AM", "").replace("PM", "")
    time.innerText = timeString

    // const hours = now.getHours() + (now.getMinutes() / 60) + (now.getSeconds() / 3600)
    const hours = 5
    gradient.style.transform = `translateY(-${hours * 100}vh)`

    function brightnessFunc(x) {
        return 1 - Math.exp(-((x - 13) ** 4) / 4096)
    }
    
    effectsLayer.style.opacity = brightnessFunc(hours)
}

export function startUpdatingClock() {
    updateTime();
    setInterval(updateTime, 1000);
}