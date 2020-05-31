import { toggleIsPlaying } from './modules/MusicPlayer'
import { startUpdatingClock } from './modules/UpdateTime'

// wait for document to be loaded
document.addEventListener('DOMContentLoaded', (event) => {

    startUpdatingClock()

    // add a event listener to click
    document.getElementById("togglePlay").addEventListener("click", () => {
        toggleIsPlaying()
    });
})