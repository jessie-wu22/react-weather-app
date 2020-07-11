import React from "react";

const Weather = (props) => (
  // displays values of all the states on screen by passing the values in App.js to weather component --> using props
  // using and operator so that information titles + its value only shown if those pieces of info exist (ex. a city and country are entered by user)
  <div className="weather__info">
    {props.city && props.country && (
      <p className="weather__key">
        Location:
        <span className="weather__value">
          {" "}
          {props.city}, {props.country}{" "}
        </span>
      </p>
    )}
    {props.temperature && (
      <p className="weather__key">
        Temperature:
        <span className="weather__value"> {props.temperature} </span>
      </p>
    )}
    {props.humidity && (
      <p className="weather__key">
        Humidity:
        <span className="weather__value"> {props.humidity} </span>
      </p>
    )}
    {props.description && (
      <p className="weather__key">
        Conditions:
        <span className="weather__value"> {props.description} </span>
      </p>
    )}
    {props.error && <p className="weather__error">{props.error}</p>}
  </div>
);

export default Weather;
