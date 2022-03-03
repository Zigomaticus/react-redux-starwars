import React from "react";
import { Link } from "react-router-dom";

import styles from "./PeopleNavigation.module.css";

const PeopleNavigation = ({ getResource, prevPage, nextPage, coutertPage }) => {
  const handleChangeNext = () => getResource(nextPage);
  const handleChangePrev = () => getResource(prevPage);

  return (
    <div className="header__text">
      <Link className={styles.link} to={`/people/?page=${coutertPage - 1}`}>
        <button
          onClick={handleChangePrev}
          className={styles.buttons}
          disabled={!prevPage}
        >
          Previous
        </button>
      </Link>
      <Link className={styles.link} to={`/people/?page=${coutertPage + 1}`}>
        <button
          onClick={handleChangeNext}
          className={styles.buttons}
          disabled={!nextPage}
        >
          Next
        </button>
      </Link>
    </div>
  );
};

export default PeopleNavigation;
