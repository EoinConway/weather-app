import React from "react";
import classes from './Timer.module.css';

const Timer = () => {
  let barFillHeight = "0%";

  return (
    <div className={classes.timer}>
      <div className={classes.timer__inner}>
        {/*dynamic value of style is a js object, which is also created with curly braces */}
        <div className={classes.timer__fill} style={{height: barFillHeight}}></div>
      </div>
      <div className={classes.timer__label}>label</div>
    </div>
  );
};

export default Timer;
