import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
// import Exercise from "./codepractice/Exercise.js";
// import Challenge from "./codepractice/Challenge.js";
import Exercise from "./codepractice/Exercise2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Exercise />
    {/* <Challenge /> */}
  </React.StrictMode>
);
