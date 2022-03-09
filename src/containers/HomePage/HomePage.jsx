// Libraries
import React from "react";
// Components
import ChooseSide from "../../components/HomePage/ChooseSide/ChooseSide";
// Css
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <h1 className="header__text">HomePage</h1>
      <ChooseSide />
    </div>
  );
};

export default HomePage;
