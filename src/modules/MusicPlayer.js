import { getCurrentHr} from './Time'

// set global state
let isPlaying = false
let audio = undefined;
const playButton = document.getElementById("togglePlay")

// fetch actual audio html element from document
audio = document.getElementById("audio");

// loop audio
audio.addEventListener("ended", () => {
    updateSrcWithHr()
    audio.play()
})

// update progress bar
audio.addEventListener("timeupdate", () => {
    const percent = audio.currentTime / audio.duration
    document.getElementById("completed").style.flexBasis = percent * 100 + '%'
})

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
}

updateSrcWithHr()

export function toggleIsPlaying() {
    if (isPlaying) {
        playButton.innerText = "►"
        audio.pause()
    } else {
        playButton.innerText = "❚❚"
        audio.play()
    }

    isPlaying = !isPlaying
}