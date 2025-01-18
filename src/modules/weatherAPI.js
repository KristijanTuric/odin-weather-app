import { visualCrossingAPIKey } from "./envVariables";

async function getCurrentWeatherData(city) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&include=current&key=${visualCrossingAPIKey}&contentType=json`);
    const data = await response.json();

    let info = {};
    info["address"] = data.address;
    info["temp"] = data.currentConditions.temp;
    info["conditions"] = data.currentConditions.conditions;
    info["icon"] = data.currentConditions.icon;

    return info;
}

export { getCurrentWeatherData };