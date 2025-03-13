// Replace 'YOUR_API_KEY' with the key you got from OpenWeatherMap
const apiKey = '62df18ca7abdc317ddc1559cc19e3820';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    fetch(`${apiUrl}${city}&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
        });
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weatherResult');
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const cityName = data.name;

    weatherDiv.innerHTML = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temp}°C</p>
        <p>Weather: ${description}</p>
    `;
}