import React from "react";

import ForecastItem from "./ForecastItem";
import classes from "./ForecastList.module.css";
import weatherImage from "./assets/weatherdrops.png";

const array = [
  {
    key: "1",
    day: "Mon",
    temp: "12",
    img: weatherImage,
    desc: "weather description 1",
  },
  {
    key: "2",
    day: "Tue",
    temp: "11",
    img: weatherImage,
    desc: "weather description 2",
  },
  {
    key: "3",
    day: "Wed",
    temp: "10",
    img: weatherImage,
    desc: "weather description 3",
  },
  {
    key: "4",
    day: "Thu",
    temp: "12",
    img: weatherImage,
    desc: "weather description 4",
  },
  {
    key: "5",
    day: "Fri",
    temp: "13",
    img: weatherImage,
    desc: "weather description 5",
  },
];

const ForecastList = (props) => {
  return (
    <ul className={classes["forecast-list"]}>
      {array.map((item) => (
        <ForecastItem
          key={item.key}
          day={item.day}
          temp={item.temp}
          img={item.img}
          desc={item.desc}
        />
      ))}
    </ul>
  );
};

export default ForecastList;
