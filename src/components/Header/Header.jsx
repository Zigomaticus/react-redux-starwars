// Libtaties
import React from "react";
import { Link } from "react-router-dom";
// Components
import Favorite from "../Favorite/Favorite";
//Css
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list__container}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/people/?page=1"}>People</Link>
        </li>
      </ul>
      <Favorite />
    </div>
  );
};

export default Header;
