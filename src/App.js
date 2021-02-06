import React from "react";
import "./styles.css";

import WeatherApp from "./WeatherApp";
import TimeDate from "./TimeDate";
import CurrentCity from "./CurrentCity";
import WeatherIcon from "./WeatherIcon";
import DescriptiveAttributes from "./DescriptiveAttributes";
import Temperature from "./Temperature";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container">
      <div className="Border">
        <div className="WeatherApp">
          <WeatherApp />
          <TimeDate />
          <h1>
            <CurrentCity />
          </h1>
          <WeatherIcon />
          <DescriptiveAttributes />
          <Temperature />
        </div>
      </div>

      <Footer />
    </div>
  );
}
