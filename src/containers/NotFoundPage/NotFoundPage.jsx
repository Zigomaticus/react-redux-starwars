// Libraries
import React from "react";
import { useLocation } from "react-router-dom";
// Img
import notFound from "../../static/404.png";
// Css
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  let location = useLocation();

  return (
    <div>
      <img className={styles.img} src={notFound} alt="Not found page" />
      <p className={styles.text}>
        No match for <u>{location.pathname}</u>
      </p>
    </div>
  );
};

export default NotFoundPage;
