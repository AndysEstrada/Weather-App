import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons = {
    sunny: "day-sunny",
    fog: "day-fog",
    sun: "day-sunny",
    rain: "rain",
    snow: "snow",
    windy: "windy",
    cloud: "cloud",
    cloudy: "cloudy"
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if (icon)
      return <WeatherIcons name={icon} size="2px" />;
    else
      return <WeatherIcons name={"day-fog"} size="2px" />;
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>{`${temperature} C°`}</span>
    </div>
);

export default WeatherTemperature;
