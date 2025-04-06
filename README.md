# WeatherSphere 🌦️

WeatherSphere is an interactive weather dashboard that provides real-time weather data, forecasts, and AI-powered location suggestions based on current weather conditions.

![WeatherSphere Dashboard](https://placeholder.com/weather-dashboard.png)

## ✨ Features

- **Real-time Weather Data**: Get current temperature, conditions, wind speed, humidity, and more
- **Interactive Map**: Select locations directly from the map to view weather data
- **7-Day Forecast**: View upcoming weather in a visual chart format
- **Hourly Forecast**: Track weather changes throughout the day
- **AI-Powered Suggestions**: Get recommendations for places to visit based on current weather
- **Dynamic Visual Effects**: Background changes based on current weather conditions
- **Voice Input**: Search for locations using voice commands
- **Responsive Design**: Works on desktop and mobile devices

## 🛠️ Technologies Used

- **Frontend**: HTML, CSS, Vue.js (CDN version), Chart.js, Leaflet.js
- **Backend**: Node.js, Express
- **APIs**:
  - [WeatherAPI](https://www.weatherapi.com) for weather data
  - [Open-Meteo](https://open-meteo.com) for additional forecast data
  - [Google Gemini API](https://ai.google.dev/) for AI-powered suggestions
  - [OpenStreetMap](https://www.openstreetmap.org) for mapping

## 📋 Prerequisites

- Node.js (v14 or higher)
- A WeatherAPI API key
- A Google Gemini API key

## 🚀 Installation

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/weather-sphere.git
   cd weather-sphere
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with your API keys:
   ```
   GEMINI_API_KEY=your-gemini-api-key-here
   ```

4. Update the WeatherAPI key in the Vue.js application (in public/web.html) if needed.

5. Start the server:
   ```
   npm start
   ```

6. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## 🎮 How to Use

1. **Search for a Location**: Enter a city name in the search bar or use the voice input button
2. **Use Current Location**: Click the location arrow button to use your current location
3. **Select on Map**: Click the "Select on Map" button and then click anywhere on the map to get weather for that location
4. **View Forecasts**: Scroll down to see hourly and 7-day forecasts
5. **Get AI Suggestions**: View the AI-generated place suggestions based on current weather conditions
6. **Change Theme**: Select a different theme from the dropdown menu

## 🔄 API Integration

### Weather Data

WeatherSphere uses the WeatherAPI.com service to fetch weather data. The free tier allows up to 1 million API calls per month.

### AI Suggestions

The application uses Google's Gemini AI model to generate contextual suggestions for places to visit based on the current weather conditions. This is implemented via a backend route that securely manages API calls.

## 📱 Mobile Support

WeatherSphere is fully responsive and works on mobile devices. The interface adapts to different screen sizes for optimal user experience.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📸 Screenshots

![Weather Dashboard](https://placeholder.com/dashboard.png)
![Map Interface](https://placeholder.com/map-interface.png)
![AI Suggestions](https://placeholder.com/ai-suggestions.png)

## 🙏 Acknowledgements

- Weather data provided by [WeatherAPI](https://www.weatherapi.com)
- Maps provided by [OpenStreetMap](https://www.openstreetmap.org)
- AI-powered suggestions by [Google Gemini API](https://ai.google.dev/)
- Background effects powered by [Vanta.js](https://www.vantajs.com/)