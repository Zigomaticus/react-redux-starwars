// Libraries
import React from "react";
import { Routes, Route } from "react-router-dom";
// Pages
import PeoplePage from "../PeoplePage/PeoplePage";
import HomePage from "../../containers/HomePage/HomePage";
// Css
import styles from "./App.module.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="people" element={<PeoplePage />} />
    </Routes>
  );
};

export default App;
