import { fetchCurrentLocation } from './LocationService'

// returns weather JSON from API as a Promise. Important keys in this object include "weather" and "wind"
export async function fetchWeather() {
    let locationData = await fetchCurrentLocation();
    let longitude = locationData.coords.longitude;
    let latitude = locationData.coords.latitude;
    let weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=3ca388d3cefa876a0952d3886830e2d9`)
    return weatherData.json();
}