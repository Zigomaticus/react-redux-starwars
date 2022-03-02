// Libraries
import React from "react";
import { Link } from "react-router-dom";

// Css
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <div className="header__text">HomePage</div>
      <Link to={'/people'}>PeoplePage</Link>
    </div>
  );
};

export default HomePage;
