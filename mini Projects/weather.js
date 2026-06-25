import https from "https";
import readline from "readline";

const wr = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const api = process.env.OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

const city = await wr.question("Enter the city name: ");
await getWeather(city);