
// wait for page to load first 
document.addEventListener('DOMContentLoaded', (event) => {

    // fetch actual audio html element from document
    const audio = document.getElementById("audio");
    
    // check new time on audio finish
    audio.onended = updateSrcWithHr();
})

// set global isPlaying state
let isPlaying = false

export function toggleIsPlaying() {
    if (isPlaying) {
        audio.pause()
    } else {
        audio.play()
    }

    isPlaying = !isPlaying
}

// updates audio to use current hour
function updateSrcWithHr() {
    const hour = getCurrentHr()
    setAudioSrc(hour)
    audio.play()
}

// returns current hour from 0 to 23
function getCurrentHr() {
    const currentHour = (new Date()).getHours();
    return currentHour
}

// sets audio src with appropriate hour
function setAudioSrc(hr) {
    const audioSrc = document.getElementById("audioSrc")
    audioSrc.src = `/music/${hr}.mp3`
    audio.load()
}