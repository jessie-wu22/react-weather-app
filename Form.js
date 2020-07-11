import React from "react";
// if class has no state, can make it into a stateless functional component --> only want to display some UI on the screen don't need to import all this class functionality
const Form = (props) => (
  // props is an HTML attribute
  // setting up a React attribute called onSubmit, which calls this.props.getWeather
  // this.props.getWeather --> calls the props called getWeather, found in App.js
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="Enter city..." />
    <input type="text" name="country" placeholder="Enter country..." />
    <button>Get Weather</button>
  </form>
);

export default Form;
