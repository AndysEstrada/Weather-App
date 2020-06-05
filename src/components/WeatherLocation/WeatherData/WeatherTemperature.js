import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './style.css';

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

    const sizeItem = "4x";

    if (icon)
      return <WeatherIcons className="wicon" name={icon} size="2x" />;
    else
      return <WeatherIcons className="wicon" name={"day-fog"} size="2x" />;
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="WeatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{` C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
