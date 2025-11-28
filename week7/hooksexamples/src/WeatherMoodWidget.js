import React, { useState, useEffect } from "react";
import Sunny from "./Sunny.png";
import Rainy from "./Rainy.png";
import Cloudy from "./Cloudy.png";

function WeatherMoodWidget(props) {
  const [weatherPic, setWeatherPic] = useState(Sunny);
  const [count, setCount] = useState(0);

  // Update image when props.weather changes
  useEffect(() => {
    if (props.weather === "Sunny") {
      setWeatherPic(Sunny);
    } else if (props.weather === "Rainy") {
      setWeatherPic(Rainy);
    } else if (props.weather === "Cloudy") {
      setWeatherPic(Cloudy);
    }
  }, [props.weather]);

  const handleClick = () => {
      setCount(count + 1);
  };

  return (
    <div className="App">
      <p>{props.weather}</p>
      <button onClick={handleClick}>
        {count}
        <img src={weatherPic} alt={props.weather} style={{ width: "60px" }} />
      </button>
    </div>
  );
}

export default WeatherMoodWidget;