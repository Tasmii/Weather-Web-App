# Weatherify

## Description

Weatherify is a simple web application that provides weather information for different cities. Users can search for a specific city or choose from a list of famous cities to view current weather conditions, such as temperature, humidity, sunrise, sunset, and wind speed. The application utilizes the RapidAPI Weather API to fetch real-time weather data.

## Features

- Search functionality to get weather information for any city.
- Predefined list of famous cities for quick access.
- Display of current temperature, feels-like temperature, humidity, sunrise, sunset, and wind speed.
- Responsive design for optimal viewing on various devices.

## Technologies Used

- HTML5
- CSS3 (Bootstrap framework)
- JavaScript (Vanilla JS)
- RapidAPI Weather API

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/weatherify.git
   ```

2. Navigate to the project directory:

   ```
   cd weatherify
   ```

3. Open the `index.html` file in your web browser.

## Usage

- Upon opening the application, users can either select a city from the "Famous Cities" dropdown menu or enter a city name in the search bar and click the "Search" button.
- The weather information for the selected city will be displayed, including temperature, feels-like temperature, humidity, sunrise time, sunset time, and wind speed.
- Users can switch between different cities or perform multiple searches to view weather information for different locations.

## API Key

To use the RapidAPI Weather API in your own projects, you need to sign up for an account on RapidAPI and obtain your API key. Replace the placeholder API key in the `script.js` file with your own key:

```javascript
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "YOUR_API_KEY_HERE",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
```

## Credits

- Weather icons by [Flaticon](https://www.flaticon.com/authors/freepik).
