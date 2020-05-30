import { toggleIsPlaying } from './modules/MusicPlayer'

// wait for document to be loaded
document.addEventListener('DOMContentLoaded', (event) => {

    // add a event listener to click
    document.getElementById("togglePlay").addEventListener("click", () => {
        toggleIsPlaying()
    });
})