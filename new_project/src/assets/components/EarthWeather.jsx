import React, { useState } from 'react';
import axios from 'axios';
import './EarthWeather.css';

const EarthWeather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [unit, setUnit] = useState('metric'); 

  const API_KEY = '488f3b8190235465207374cba5d62e09'; 

  const fetchWeather = async (city, unit) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=${unit}`;
    
    try {
      const response = await axios.get(API_URL);
      setWeatherData(response.data);
      setError('');  
    } catch (err) {
      setError('City not found, please try again.');
      setWeatherData(null);  
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city, unit);  
  };

  const toggleUnit = () => {
    const newUnit = unit === 'metric' ? 'imperial' : 'metric';
    setUnit(newUnit);
    if (city) {
      fetchWeather(city, newUnit);  
    }
  };

  return (
    <div className="weather-container">
      <h2>Earth Weather</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>

      <button onClick={toggleUnit}>
        Show in {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
      </button>

      {error && <p className="error">{error}</p>}

      {weatherData && (
        <div className="weather-info">
          <h3>{weatherData.name}, {weatherData.sys.country}</h3>
          <p>Temperature: {weatherData.main.temp} °{unit === 'metric' ? 'C' : 'F'}</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</p>
        </div>
      )}
    </div>
  );
};

export default EarthWeather;
