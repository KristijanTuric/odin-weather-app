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

cityInput.addEventListener("keydown", async(event) => {
    if (event.key === "Enter") {
        await searchCityWeather(cityInput);
    }
})

cityInputSearchIcon.addEventListener("click", async() => {
    await searchCityWeather(cityInput);
});

// Gets data, displays it and clears the city input
async function searchCityWeather(city) {
    let currentWeather = await getCurrentWeatherData(city.value, isMetric);
    displayWeather(currentWeather, isMetric);
    cityInput.value = "";
}

// Unit toggle
unitToggle.addEventListener("change", () => {
    // It is set to Celsius
    if (!unitToggle.checked) {
        isMetric = true;
    }
    // It is set to Fahrenheit
    else {
        isMetric = false;
    }
});
