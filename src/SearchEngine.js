import React, { useState } from "react";
import axios from "axios";

function SearchEngine() {
  let [temperature, setTemperature] = useState(null);
  let [city, setCity] = useState(null);
  let apiKey = "14b0c56139feeed41482ca86bba4198c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  function handleResponse(response) {
    setTemperature(response.data.main.temp);
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert(`The temperature in ${city} is ${Math.round(temperature)}ºC`);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );
}
export default SearchEngine;
