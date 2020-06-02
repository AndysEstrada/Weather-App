import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

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
      return <WeatherIcons name={icon} size="2x" />;
    else
      return <WeatherIcons name={"day-fog"} size="2x" />;
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>{`${temperature} C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
