import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-day": "CLEAR_DAY",
    "clear-night": "CLEAR_NIGHT",
    "partly-cloudy-day": "PARTLY_CLOUDY_DAY",
    "partly-cloudy-night": "PARTLY_CLOUDY_NIGHT",
    cloudy: "CLOUDY",
    "broken-clouds": "CLOUDY",
    rain: "RAIN",
    snow: "SNOW",
    sleet: "SLEET",
    wind: "WIND",
    fog: "FOG",
    thunderstorm: "RAIN",
    "thunderstorm-day": "RAIN",
    "thunderstorm-night": "RAIN",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "fog-day": "FOG",
    "fog-night": "FOG",
  };
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code] || "CLEAR_DAY"}
      color="pink"
      size={props.size}
      animate={true}
    />
  );
}
