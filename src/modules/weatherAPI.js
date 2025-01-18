import { visualCrossingAPIKey } from "./envVariables";
import { displayError } from "./errorDisplay";

/**
 * Fetches the current weather data for a specified city using the Visual Crossing Weather API.
 *
 * @async
 * @function getCurrentWeatherData
 * @param {string} city - The name of the city to fetch weather data for.
 * @param {boolean} isMetric - Specifies whether to use the metric system for units.
 * @returns {Promise<Object>} A promise that resolves to an object containing the weather data:
 * - `address` {string}: The address or city name returned by the API.
 * - `temp` {number}: The current temperature in the specified unit.
 * - `conditions` {string}: The current weather conditions (e.g., "Partly Cloudy").
 * - `icon` {string}: The name of the icon representing the weather conditions.
 * - `tempFeelsLike` {number}: The "feels like" temperature in the specified unit.
 *
 * If an error occurs (e.g., invalid city name), a default object is returned:
 * - `address` {string}: "City was not found".
 * - `temp` {number}: 0.
 * - `conditions` {string}: "Enter another city".
 * - `icon` {string}: "wind".
 * - `tempFeelsLike` {number}: 0.
 *
 * @throws Will display an error message using the `displayError` function if the fetch request fails or the city is not found.
 *
 * @example
 * // Example usage:
 * import { getCurrentWeatherData } from './weatherData';
 * 
 * getCurrentWeatherData('London', true)
 *   .then(data => {
 *     console.log(data.temp); // Logs the current temperature in Celsius.
 *   })
 *   .catch(error => {
 *     console.error('Error fetching weather data:', error);
 *   });
 */
async function getCurrentWeatherData(city, isMetric) {
    try {

        let url = "";
        if (isMetric) {
            url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&include=current&key=${visualCrossingAPIKey}&contentType=json`;
        }
        else {
            url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&include=current&key=${visualCrossingAPIKey}&contentType=json`;
        }

        const response = await fetch(url);

        const data = await response.json();

        let info = {};
        info["address"] = data.address;
        info["temp"] = data.currentConditions.temp;
        info["conditions"] = data.currentConditions.conditions;
        info["icon"] = data.currentConditions.icon;
        info["tempFeelsLike"] = data.currentConditions.feelslike;

        return info;
    }
    catch {        
        displayError("City not found. Please check the spelling and try again.");

        let info = {};
        info["address"] = "City was not found";
        info["temp"] = 0;
        info["conditions"] = "Enter another city";
        info["icon"] = "wind";
        info["tempFeelsLike"] = 0;

        return info;
    }
    
}

export { getCurrentWeatherData };