import React, { useEffect, useState } from "react";

import axios from "axios";
import ForecastItem from "./ForecastItem";
import classes from "./ForecastList.module.css";
import weatherImage from "./assets/weatherdrops.png";

const array = [
  {
    "dt": 1649106000,
    "main": {
      "temp": 12.64,
      "feels_like": 12.13,
      "temp_min": 10.83,
      "temp_max": 12.64,
      "pressure": 1010,
      "sea_level": 1010,
      "grnd_level": 1007,
      "humidity": 83,
      "temp_kf": 1.81
    },
    "weather": [
      {
        "id": 804,
        "main": "Clouds",
        "description": "rainy time",
        "icon": "04n"
      }
    ],
    "clouds": { "all": 100 },
    "wind": { "speed": 4.83, "deg": 274, "gust": 11.13 },
    "visibility": 10000,
    "pop": 0,
    "sys": { "pod": "n" },
    "dt_txt": "2022-04-04 21:00:00"
  },
  {
    "dt": 1649116800,
    "main": {
      "temp": 11.53,
      "feels_like": 10.98,
      "temp_min": 10.52,
      "temp_max": 11.53,
      "pressure": 1010,
      "sea_level": 1010,
      "grnd_level": 1007,
      "humidity": 86,
      "temp_kf": 1.01
    },
    "weather": [
      {
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04n"
      }
    ],
    "clouds": { "all": 100 },
    "wind": { "speed": 4.96, "deg": 274, "gust": 11.17 },
    "visibility": 10000,
    "pop": 0,
    "sys": { "pod": "n" },
    "dt_txt": "2022-04-05 00:00:00"
  },
  {
    "dt": 1649127600,
    "main": {
      "temp": 10.18,
      "feels_like": 9.58,
      "temp_min": 10.18,
      "temp_max": 10.18,
      "pressure": 1010,
      "sea_level": 1010,
      "grnd_level": 1007,
      "humidity": 89,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04n"
      }
    ],
    "clouds": { "all": 100 },
    "wind": { "speed": 4.49, "deg": 273, "gust": 11.1 },
    "visibility": 10000,
    "pop": 0,
    "sys": { "pod": "n" },
    "dt_txt": "2022-04-05 03:00:00"
  },
  {
    "dt": 1649138400,
    "main": {
      "temp": 10.19,
      "feels_like": 9.54,
      "temp_min": 10.19,
      "temp_max": 10.19,
      "pressure": 1010,
      "sea_level": 1010,
      "grnd_level": 1007,
      "humidity": 87,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04d"
      }
    ],
    "clouds": { "all": 100 },
    "wind": { "speed": 4.54, "deg": 270, "gust": 10.95 },
    "visibility": 10000,
    "pop": 0,
    "sys": { "pod": "d" },
    "dt_txt": "2022-04-05 06:00:00"
  },
  {
    "dt": 1649149200,
    "main": {
      "temp": 11.95,
      "feels_like": 11.11,
      "temp_min": 11.95,
      "temp_max": 11.95,
      "pressure": 1010,
      "sea_level": 1010,
      "grnd_level": 1007,
      "humidity": 73,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04d"
      }
    ],
    "clouds": { "all": 99 },
    "wind": { "speed": 5.63, "deg": 271, "gust": 9.47 },
    "visibility": 10000,
    "pop": 0,
    "sys": { "pod": "d" },
    "dt_txt": "2022-04-05 09:00:00"
  },
  {
    "dt": 1649160000,
    "main": {
      "temp": 12.44,
      "feels_like": 11.52,
      "temp_min": 12.44,
      "temp_max": 12.44,
      "pressure": 1009,
      "sea_level": 1009,
      "grnd_level": 1006,
      "humidity": 68,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04d"
      }
    ],
    "clouds": { "all": 99 },
    "wind": { "speed": 5.44, "deg": 271, "gust": 8.46 },
    "visibility": 10000,
    "pop": 0,
    "sys": { "pod": "d" },
    "dt_txt": "2022-04-05 12:00:00"
  }
];


const ForecastList = (props) => {
  // const url = `https://api.openweathermap.org/data/2.5/forecast?q=london&appid=04e702717390eba36a48bbaa89013cef&units=metric`;

  // const [forecastData, setForecastData] = useState({});
   const [isLoading, setIsLoading] = useState();

  // useEffect(() => {
  //   setIsLoading(true);
  //   axios
  //     .get(url)
  //     .then((response) => {
  //       setForecastData(response.data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  // const forecastArray = forecastData.list;

  // console.log(forecastArray);



  return (
    !isLoading ? <ul className={classes["forecast-list"]}>
      {array.map((item) => (
        <ForecastItem
          key={item.dt}
          day={item.dt_txt}
          temp={Math.round(item.main.temp)}
          img={'http://openweathermap.org/img/wn/'+item.weather.icon+'@2x.png'}
          desc={item.weather[0].description}
        />
      ))}
    </ul> : <p>loading...</p>
  );
};

export default ForecastList;
