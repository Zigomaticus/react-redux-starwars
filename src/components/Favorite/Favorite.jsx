// Libraries
import React from "react";
import { Link } from "react-router-dom";
// Icon
import icon from "./img/bookmark.svg";
// Css
import styles from "./Favorite.module.css";

const Favorite = () => {
  return (
    <div>
      <Link to={"/favorites"}>
        <span className={styles.counter}>0</span>
        <img
          src={icon}
          className={styles.icon}
          alt="favorites"
          width={50}
          height={50}
        />
      </Link>
    </div>
  );
};

export default Favorite;
