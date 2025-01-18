import { visualCrossingAPIKey } from "./envVariables";
import { displayError } from "./errorDisplay";

async function getCurrentWeatherData(city) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&include=current&key=${visualCrossingAPIKey}&contentType=json`);
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