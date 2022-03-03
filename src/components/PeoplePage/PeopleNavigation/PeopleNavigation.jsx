// Libraries
import React from "react";
import { Link } from "react-router-dom";
// UI
import UiButton from "../../UI/UiButton/UiButton";
// Css
import styles from "./PeopleNavigation.module.css";

const PeopleNavigation = ({ getResource, prevPage, nextPage, coutertPage }) => {
  const handleChangeNext = () => getResource(nextPage);
  const handleChangePrev = () => getResource(prevPage);

  return (
    <div className={styles.container}>
      <Link className={styles.buttons} to={`/people/?page=${coutertPage - 1}`}>
        <UiButton text="Prev" onClick={handleChangePrev} disabled={!prevPage} />
      </Link>
      <Link className={styles.buttons} to={`/people/?page=${coutertPage + 1}`}>
        <UiButton text="Next" onClick={handleChangeNext} disabled={!nextPage} />
      </Link>
    </div>
  );
};

export default PeopleNavigation;
