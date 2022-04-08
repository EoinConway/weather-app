import React, { useEffect, useState } from "react";

import classes from './Clock.module.css';

const Clock = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(
        date.toLocaleTimeString('en-GB', { hour: "2-digit", minute: "2-digit" })
      );
    }, 1000);
  }, []);

  return <div className={classes.container}>
      {clockState} GMT</div>;
};

export default Clock;