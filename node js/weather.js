const http = require('http');
const axios = require('axios');
const url = require('url');

// Replace with your OpenWeather API key
const API_KEY = '9b8d401bb97240c92212dcdf85170009';

// Define port
const PORT = 3000;

// Create HTTP server
const server = http.createServer(async (req, res) => {

    const parsedUrl = url.parse(req.url, true);
    const city = parsedUrl.query.city;

    res.setHeader('Content-Type', 'application/json');

    if (!city) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: "City name is required" }));
        return;
    }

    try {
        const weatherUrl =
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        const response = await axios.get(weatherUrl);

        const weatherData = {
            city: response.data.name,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description
        };

        res.statusCode = 200;
        res.end(JSON.stringify(weatherData));

    } catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: "Unable to fetch weather data" }));
    }
});

// Start server
server.listen(PORT, () => {
    console.log(`Weather server running at http://localhost:${PORT}`);
});

