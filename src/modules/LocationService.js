let positionData = null;

// return's a Promise that should EVENTUALLY return current user location data
export async function fetchCurrentLocation() {
    const locationPromise = new Promise((resolve, reject) => {
        if (positionData) {
            resolve(positionData) 
        } else {
            // asynchronous function call
            navigator.geolocation.getCurrentPosition((position) => {
                if (position) {
                    positionData = position;
                    resolve(position)    
                } else {
                    reject("error")
                }
            });
        }        
    });
    return locationPromise;
}