import React from "react";

import Header from "./components/Header/Header";
import ForecastList from "./components/ForecastList";
import "./App.css";

export const TimerContext = React.createContext();

function App() {


  return (
    <React.Fragment>
      <Header />
      <ForecastList />
      </React.Fragment>
  );
}

export default App;
