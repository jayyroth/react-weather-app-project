import React from "react";
import SearchForm from "./SearchForm";
import "./Weather.css";
import "./SearchForm.css";

export default function Weather() {
  return (
    <div className="Weather">
      <SearchForm />
      <h1>New York</h1>
      <ul>
        <li>Wednesday 10:33</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly Cloudy"
              className="float-left"
            />
              <span className="temperature">6</span>
              <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 75%</li>
            <li>Wind: 13 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
