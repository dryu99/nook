import { fetchWeather } from './WeatherService.js'

// set global state
let isEffectsPlaying = false
const effectsAudio = document.getElementById("effectsAudio");
const effectsPlayButton = document.getElementById("toggleRainButton");

function setRainAudioSrc() {
    const audioEffectsSrc = document.getElementById("effectsAudioSource")
    audioEffectsSrc.src = `./soundEffects/rain.mp3`
    effectsAudio.load();
    effectsAudio.volume = 0.07;
}

effectsAudio.addEventListener("ended", () => {
    effectsAudio.play()
})

setRainAudioSrc();

export async function checkForRainSoundEffect() {
    const weatherPromise = fetchWeather();
    weatherPromise.then(data => {
        const weatherType = data.weather[0].main;
        if (weatherType === "Rain" || weatherType === "Thunderstorm") {
            if (!isEffectsPlaying) {
                effectsAudio.play();
            }
        } else {
            if (isEffectsPlaying) {
                effectsAudio.pause();
            }                
        }
    })    
}

export function turnRainOn() {
    effectsAudio.play();
    isEffectsPlaying = true
}

export function turnRainOff() {
    effectsAudio.pause();
    isEffectsPlaying = false
}


