import { Fragment, useState, useEffect } from "react";

import axios from "axios";
import Timer from "./Timer";
import Clock from "./Clock";

import classes from "./Header.module.css";

const Header = () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=04e702717390eba36a48bbaa89013cef&units=metric`;

  const [data, setData] = useState({});

  const fetchWeather = () => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>{data.name}</h1>
        <Clock />
        {data.main ? <div>{Math.round(data.main.temp)}&#176;</div> : null}
        {/* <div className={classes.lower}>Timer comp</div> */}
      </header>
      <Timer />
    </Fragment>
  );
};

export default Header;
