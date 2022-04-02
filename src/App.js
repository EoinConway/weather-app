import React, { useState, useEffect, useCallback } from "react";

import Header from './components/Header/Header';
import ForecastList from "./components/ForecastList";
import "./App.css";

function App() {
  // const [forecasts, setForecasts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const fetchForecastsHandler = useCallback(async () => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       "api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid={603c0c7138eb6cfa5f5aeac248bb81d1}"
  //     ); 
  //     if (!response.ok) {
  //       throw new Error("Something went wrong!");
  //     }

  //     const data = await response.json();
  //     console.log(data.location);

  //     const loadedForecasts = [];

  //     // for (const key in data) {
  //     //   loadedForecasts.push({
  //     //     id: key,
  //     //     day: data[key].list,
  //     //     openingText: data[key].openingText,
  //     //     releaseDate: data[key].releaseDate,
  //     //   });
  //     // }

  //      setForecasts(loadedForecasts);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //   setIsLoading(false);
  // }, []);

  // useEffect(() => {
  //   fetchForecastsHandler();
  // }, [fetchForecastsHandler]);

  // let content = <p>Found no forecasts.</p>;

  // if (forecasts.length > 0) {
  //   content = <ForecastList forecast={forecasts} />;
  // }

  // if (error) {
  //   content = <p>{error}</p>;
  // }

  // if (isLoading) {
  //   content = <p>Loading...</p>;
  // }

  return (
    <React.Fragment>
      {/* <section>
        <button onClick={fetchForecastsHandler}>Fetch Forecasts</button>
      </section> */}
      {/* <section>{content}</section> */}
      <Header />
      <ForecastList />
    </React.Fragment>
  );
}

export default App;
