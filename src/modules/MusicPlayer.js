import { getCurrentHr} from './Time'
import * as path from 'path'
// set global state
let isPlaying = false
let audio = undefined;

// wait for page to load first 
document.addEventListener('DOMContentLoaded', (event) => {

    // fetch actual audio html element from document
    audio = document.getElementById("audio");
    audio.addEventListener("ended", () => {
        updateSrcWithHr()
    })

    updateSrcWithHr()

    // updates audio to use current hour
    function updateSrcWithHr() {
        const hour = getCurrentHr()
        setAudioSrc(hour)
    } 

    // sets audio src with appropriate hour
    function setAudioSrc(hr) {
        audio.pause()
        const audioSrc = document.getElementById("audioSrc")
       audioSrc.src = `music/${hr}.mp3`
        audio.load()
        audio.play()
    }
})

export function toggleIsPlaying() {
    if (isPlaying) {
        audio.pause()
    } else {
        audio.play()
    }

    isPlaying = !isPlaying
}