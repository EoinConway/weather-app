import React, { useEffect, useState } from "react";

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

  return <div>{clockState} GMT</div>;
};

export default Clock;
