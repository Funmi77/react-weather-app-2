import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lagos" />

        <footer className="footer">
          This project was coded by{" "}
          <a
            href="https://github.com/Funmi77"
            target="_blank"
            rel="noopener noreferrer"
          >
            Funmilayo Fagbemi
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Funmi77/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
