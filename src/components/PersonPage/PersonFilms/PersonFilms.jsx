// Libraries
import React, { useState, useEffect } from "react";
//
import { makeCuncurrentRequest, changeHTTP } from "../../../utils/network";
// Css
import styles from "./PersonFilms.module.css";

const PersonFilms = ({ personFilms }) => {
  const [filmsName, setFilmsName] = useState([]);

  useEffect(() => {
    (async () => {
      const filmsHTTPS = personFilms.map((url) => changeHTTP(url));
      const response = await makeCuncurrentRequest(filmsHTTPS);

      setFilmsName(response);
    })();
  }, []);

  return (
    <div>
      <ul>
        {filmsName.map(({ title, episode_id }) => (
          <li key={episode_id}>
            <span>Episode {episode_id}</span>
            <span> : </span>
            <span>{title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonFilms;
