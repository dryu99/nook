// return's a Promise that should EVENTUALLY return current user location data
export function fetchCurrentLocation() {
    const locationPromise = new Promise((resolve, reject) => {
        // asynchronous function call
        navigator.geolocation.getCurrentPosition((position) => {
            if (position) {
                resolve(position)    
            } else {
                reject("error")
            }
        });
    });
    return locationPromise;
}