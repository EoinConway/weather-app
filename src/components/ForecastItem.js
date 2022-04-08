import React from "react";

import classes from "./ForecastItem.module.css";

const ForecastItem = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.day}>{props.day}</div>
      <div className={classes.temp}>{props.temp}&#176;</div>
      <div className={classes.weather}>
        <img src={props.img} alt="forecast item"></img>
        <span><p>{props.desc}</p></span>
      </div>
    </div>
  );
};

export default ForecastItem;
