import "./style.css";
import { typePlaceholder } from "./modules/animatedInput";
import footerIcon from "./modules/footerLink";
import { getCurrentWeatherData } from "./modules/weatherAPI";
import { displayWeather } from "./modules/displayWeatherCard";

// Animated input one-shot
typePlaceholder();

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

async function searchCityWeather(city) {
    let currentWeather = await getCurrentWeatherData(city.value);
    displayWeather(currentWeather);
    cityInput.value = "";
}
