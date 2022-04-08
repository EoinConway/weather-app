import React, { useEffect, useState } from "react";

import axios from "axios";
import ForecastItem from "./ForecastItem";
import classes from "./ForecastList.module.css";

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const dateToDay = (datetime) => {
  const d = new Date(datetime);
  const day = days[d.getDay()];
  return day;
};

const ForecastList = () => {

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=london&appid=04e702717390eba36a48bbaa89013cef&units=metric`;

  const [forecastData, setForecastData] = useState({ list: [] });
  const [isLoading, setIsLoading] = useState(false);

  const fetchForecastsHandler = () => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setForecastData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchForecastsHandler();
    const interval = setInterval(() => {
      fetchForecastsHandler();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const forecastArray = forecastData.list;

  const arrayDays = [];

  for(var i = 0; i < forecastArray.length; i++) {
    if (i > 0 && i % 8 === 7){
      console.log(forecastArray[i]);
      const newDay = forecastArray[i];
      arrayDays.push(newDay);
    }
  }

  console.log(arrayDays);

  let content = <p>Found no forecasts.</p>;

  if (!isLoading) {
    content = (
      <ul className={classes["forecast-list"]}>
        {arrayDays.map((item) => (
          <ForecastItem
            key={item.dt}
            day={dateToDay(item.dt_txt)}
            temp={Math.round(item.main.temp)}
            img={
              "http://openweathermap.org/img/wn/" +
              item.weather[0].icon +
              "@2x.png"
            }
            desc={item.weather[0].description}
          />
        ))}
      </ul>
    );
  } else {
    content = <p>Loading...</p>;
  }

  return <React.Fragment>{content}</React.Fragment>;
};

export default ForecastList;
