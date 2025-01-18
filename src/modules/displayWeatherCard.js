function displayWeather(info) {
    const weatherCardTitle = document.getElementById("weatherCardTitle");
    const weatherCardTemperature = document.getElementById("weatherCardTemperature");
    const weatherCardWeather = document.getElementById("weatherCardWeather");
    const weatherCardIcon = document.getElementById("weatherCardIcon");

    weatherCardTitle.textContent = info["address"];
    weatherCardTemperature.textContent = Math.round(info["temp"]) + "°C";
    weatherCardWeather.textContent = info["conditions"];
    weatherCardIcon.className = getIconClass(info["icon"]);
}

// Returns the class of the icon
function getIconClass(icon) {
    switch(icon) {
        case "snow":
            return "ph ph-cloud-snow";   
        case "rain":
            return "ph ph-cloud-rain";
        case "fog":
            return "ph ph-cloud-fog";   
        case "wind":
            return "ph ph-wind";
        case "cloudy":
            return "ph ph-cloud";   
        case "clear-day":
            return "ph ph-sun";
        case "clear-night":
            return "ph ph-moon-stars";   
        case "partly-cloudy-day":
            return "ph ph-cloud-sun";
        case "partly-cloudy-night":
            return "ph ph-cloud-moon";
        default:
            return "ph ph-cloud";
    }
}

export { displayWeather };