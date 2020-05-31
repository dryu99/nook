import { toggleIsPlaying } from './modules/MusicPlayer'
import { startUpdatingClock } from './modules/UpdateTime'
import { turnRainOff, turnRainOn } from './modules/EffectsPlayer'
import { initStars } from './modules/Stars'

// wait for document to be loaded
document.addEventListener('DOMContentLoaded', (event) => {
    startUpdatingClock()
    initStars()

    // add a event listener to click
    document.getElementById("togglePlay").addEventListener("click", () => {
        toggleIsPlaying()
    }); 

    // add a event listener to click
    const dropdown = document.getElementById("chevron")
    const content = document.getElementById("content")
    dropdown.addEventListener("click", () => {
        dropdown.classList.toggle("isActive")
        content.classList.toggle("isActive")
    });

    // listen for particle option
    const particleEnabled = document.querySelector("input[name=particles]");
    particleEnabled.addEventListener('change', () => {
        const stars = document.getElementById("stars")
        if (particleEnabled.checked) {
            stars.style.opacity = 1
        } else {
            stars.style.opacity = 0
        }
    });

    // listen for force rain option
    const forceRain = document.querySelector("input[name=rain]");
    forceRain.addEventListener('change', () => {
        if (forceRain.checked) {
            turnRainOn()
        } else {
            turnRainOff()
        }
    });
})