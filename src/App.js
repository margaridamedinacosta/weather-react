import React from "react";
import SearchEngine from "./SearchEngine";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <h2>Search the Weather in your city</h2>
      <p>(or wherever you need to know)</p>
      <SearchEngine />
    </div>
  );
}

export default App;
