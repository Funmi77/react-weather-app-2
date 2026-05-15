import axios from "axios";
import { useState } from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (day, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <div className="forecast-card">
                    <div className="forecast-day">{formatDay(day.time)}</div>

                    <img
                      src={day.condition.icon_url}
                      alt={day.condition.description}
                      className="forecast-icon"
                    />

                    <div className="forecast-temp">
                      <span className="max">
                        {Math.round(day.temperature.maximum)}°
                      </span>
                      <span className="min">
                        {Math.round(day.temperature.minimum)}°
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "7e77fbbbab91e5504tfaaa75643of118";

    const latitude = props.coordinates.latitude;
    const longitude = props.coordinates.longitude;

    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return <div className="forecast-loading">Loading forecast...</div>;
  }
}

// helper function
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
}
