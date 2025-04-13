import "./style.css";
import { typePlaceholder } from "./modules/animatedInput";
import footerIcon from "./modules/footerLink";
import { getCurrentWeatherData } from "./modules/weatherAPI";
import { displayWeather } from "./modules/displayWeatherCard";

// Animated input one-shot
typePlaceholder();

const unitToggle = document.getElementById("unitToggle");
let isMetric = !unitToggle.checked;

// City Search and Input
const cityInput = document.getElementById("citySearch");
const cityInputSearchIcon = document.getElementById("citySearchIcon");
const weatherCard = document.getElementById("weatherCard");
let lastCity = "";

cityInput.addEventListener("keydown", async(event) => {
    if (event.key === "Enter") {
        lastCity = cityInput.value;
        await searchCityWeather(cityInput.value);
    }
})

cityInputSearchIcon.addEventListener("click", async() => {
    lastCity.value = cityInput;
    await searchCityWeather(cityInput.value);
});

// Gets data, displays it and clears the city input
async function searchCityWeather(city) {
    const spinner = document.getElementById("loading-spinner");
    spinner.style.display = "block";
    weatherCard.style.display = "none";

    try {
        let currentWeather = await getCurrentWeatherData(city, isMetric);
        displayWeather(currentWeather, isMetric);
    } catch(error) {
        console.error("Failed to fetch data: ", error);
    } finally {
        spinner.style.display = "none";
        weatherCard.style.display = "flex";
        cityInput.value = "";
    }
}

// Unit toggle
unitToggle.addEventListener("change", async() => {
    // It is set to Celsius
    if (!unitToggle.checked) {
        isMetric = true;
        await searchCityWeather(lastCity);
    }
    // It is set to Fahrenheit
    else {
        isMetric = false;
        await searchCityWeather(lastCity);
    }
});
