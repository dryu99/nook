import { getCurrentHr} from './Time'
import { checkForRainSoundEffect } from './EffectsPlayer'

// set global state
let isPlaying = false
let audio = undefined;
const playButton = document.getElementById("togglePlay")
let songCache = [];

// fetch actual audio html element from document
audio = document.getElementById("audio");

// loop audio
audio.addEventListener("ended", () => {
    updateSrcWithHr()
    audio.play()
})

audio.addEventListener("play", () => {
    checkForRainSoundEffect()
})

// update progress bar
audio.addEventListener("timeupdate", () => {
    const percent = audio.currentTime / audio.duration
    document.getElementById("completed").style.flexBasis = percent * 100 + '%'
})

// sets new audio src if current one doesn't exist
audio.addEventListener('error', (e) => {
    updateSrcWithHr()
    audio.play()
}, true);

// updates audio to use current hour
function updateSrcWithHr() {
    const hour = getCurrentHr()
    const newSongId = findNewSongId(hour);
    setAudioSrc(hour, newSongId)
} 

// sets audio src with appropriate hour and song id
function setAudioSrc(hr, songId) {
    const audioSrc = document.getElementById("audioSrc")
    audioSrc.src = `music/${hr}/${songId}.mp3`
    audio.load()
}

// generates new song id given the hour - format is ${hr}.${num btw 1-10}
function findNewSongId(hr) {
    let lastSongPlayedId = songCache[hr];
    let randomSongId = Math.ceil(Math.random() * 4)
    // don't play last played song num
    while (lastSongPlayedId && lastSongPlayedId === randomSongId) {
        randomSongId = Math.ceil(Math.random() * 4)
    }

    songCache[hr] = randomSongId;
    return hr + "." + randomSongId;
}

updateSrcWithHr()

export function toggleIsPlaying() {  
    if (isPlaying) {
        playButton.innerText = "►"
        audio.pause()

        effectsAudio.pause();
    } else {
        playButton.innerText = "❚❚"
        audio.play()
    }

    isPlaying = !isPlaying
}
