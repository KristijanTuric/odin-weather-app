/**
 * Updates the weather card UI with the provided weather information.
 *
 * @function displayWeather
 * @param {Object} info - An object containing weather information.
 * @param {string} info.address - The name or address of the location.
 * @param {number} info.temp - The current temperature.
 * @param {string} info.conditions - The current weather conditions (e.g., "Sunny").
 * @param {string} info.icon - The icon name representing the weather conditions.
 * @param {number} info.tempFeelsLike - The "feels like" temperature.
 * @param {boolean} isMetric - Specifies whether to display the data in metric or imperial units.
 *
 * @returns {void}
 *
 * @description
 * This function updates various elements in the weather card with the provided weather data:
 * - Updates the title with the location's address.
 * - Updates the temperature, weather conditions, and "feels like" temperature.
 * - Updates the icon class to visually represent the current weather.
 *
 * The function applies formatting for both metric (°C) and imperial (°F) units depending on the `isMetric` flag.
 *
 * @example
 * const weatherData = {
 *   address: "London",
 *   temp: 15,
 *   conditions: "Cloudy",
 *   icon: "cloudy",
 *   tempFeelsLike: 13,
 * };
 * 
 * displayWeather(weatherData, true); // Updates the UI with metric data
 */
function displayWeather(info, isMetric) {
    const weatherCardTitle = document.getElementById("weatherCardTitle");
    const weatherCardTemperature = document.getElementById("weatherCardTemperature");
    const weatherCardWeather = document.getElementById("weatherCardWeather");
    const weatherCardIcon = document.getElementById("weatherCardIcon");
    const weatherCardExtremes = document.getElementById("weatherCardExtremes");

    if (isMetric) {
        weatherCardTitle.textContent = info["address"];
        weatherCardTemperature.textContent = Math.round(info["temp"]) + "°C";
        weatherCardWeather.textContent = info["conditions"];
        weatherCardIcon.className = getIconClass(info["icon"]);
        weatherCardExtremes.textContent = `Feels like ${Math.round(info["tempFeelsLike"])}°C`
    }
    else {
        weatherCardTitle.textContent = info["address"];
        weatherCardTemperature.textContent = Math.round(info["temp"]) + "°F";
        weatherCardWeather.textContent = info["conditions"];
        weatherCardIcon.className = getIconClass(info["icon"]);
        weatherCardExtremes.textContent = `Feels like ${Math.round(info["tempFeelsLike"])}°F`
    }

}

/**
 * Maps a weather condition icon name to a corresponding CSS class for display.
 *
 * @function getIconClass
 * @param {string} icon - The icon name from the weather data (e.g., "clear-day", "rain").
 * @returns {string} The corresponding CSS class name for the icon.
 *
 * @description
 * This function takes a weather condition's icon name and returns a CSS class name 
 * that can be used to style an icon element. If the icon name is not recognized, 
 * a default "cloud" icon class is returned.
 *
 * @example
 * const iconClass = getIconClass("rain");
 * console.log(iconClass); // Outputs: "ph ph-cloud-rain"
 *
 * @example
 * const iconClass = getIconClass("unknown");
 * console.log(iconClass); // Outputs: "ph ph-cloud" (default)
 */
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