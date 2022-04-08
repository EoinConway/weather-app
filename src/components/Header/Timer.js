import React from "react";
import { useState, useEffect } from "react";
import classes from "./Timer.module.css";

const Timer = (props) => {
  let barFillLength = "100%";

  const [remainingSeconds, setRemainingSeconds] = useState(props.timeStart);

  const updateRemainingSeconds = () => {
    setRemainingSeconds(remainingSeconds - "1");
  };

  const reset = () => {
    setRemainingSeconds(props.timeStart);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateRemainingSeconds();
    }, 1000);
    return () => clearInterval(interval);
  }, [remainingSeconds]);

  if (remainingSeconds === -1) {
    reset();
  }

  barFillLength = (remainingSeconds / 60) * 100;

  return (
    <React.Fragment>
      <div className={classes["timer-text"]}>
        Reloading in {remainingSeconds}s
      </div>
      <div className={classes["timer-bar"]}>
        <div className={classes["timer-bar__inner"]}>
          <div
            className={classes["timer-bar__fill"]}
            style={{ width: barFillLength + '%' }}
          ></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Timer;
