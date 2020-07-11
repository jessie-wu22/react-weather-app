import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
require("dotenv").config();

const API_KEY = process.env.REACT_APP_SECRET_KEY;

// initialize the component by creating an instance of App
class App extends React.Component {
  // state object, here it represents initial state of object, object within a component that keeps track of changing data within a component (ie. any interaction with app that causes data to change)
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    decription: undefined,
    error: undefined,
  };
  getWeather = async (e) => {
    e.preventDefault();
    // creates constant that stores the method that makes the API call
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const apiCall = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );

    // converts the data (into json format), which converts data received from API to a readable format for program
    const data = await apiCall.json();
    // setting values of states in function
    // if city and country return true, then render code that comes below

    if (city || country) {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please a valid city and/or country.",
      });
    }
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please a valid city and/or country.",
      });
    }
  };

  render() {
    // render method returns JSX
    // can only return one parent element (between h tags)
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-x-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// API note: Form getWeather={this.getWeather}
// goal: give Form component in App.js access to the props in Form.js file
//getWeather is a props name, this gets set to a JS expression --> here you set the value to getWeather function
// this now means we have access to getWeather function in Form.js

export default App; // makes App component available for other files to import (index.js)
