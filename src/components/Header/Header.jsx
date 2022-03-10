// Libtaties
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Components
import Favorite from "../Favorite/Favorite";
// Img
import imgDeathStar from "./img/deathStar.png";
import imgDroid from "./img/droid.png";
import imgLightsabe from "./img/lightsabe.png";
// Content
import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL,
} from "../../context/ThemeProvider";
//Css
import styles from "./Header.module.css";

const Header = () => {
  const [icon, setIcon] = useState(imgDeathStar);
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgLightsabe);
        break;
      case THEME_DARK:
        setIcon(imgDeathStar);
        break;
      case THEME_NEITRAL:
        setIcon(imgDroid);
        break;
      default:
        setIcon(imgDeathStar);
    }
  }, [isTheme]);

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={icon} alt="Star Wars" />

      <ul className={styles.list__container}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/people/?page=1">People</Link>
        </li>
        {/* <li><Link to="/search">Search</Link></li> */}
      </ul>

      <Favorite />
    </div>
  );
};

export default Header;
