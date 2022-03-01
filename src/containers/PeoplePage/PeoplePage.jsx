// Libraries
import React, { useEffect, useState } from "react";
// Utils
import { getApiResource } from "../../utils/network";
// Constance
import { API_PEOPLE } from "../../constants/api";
// Components
import PeopleList from "../../components/PeoplePage/PeopleList/PeopleList";
// Services
import { getPeopleId, getPeopleImage } from "../../services/getPeopleData";
// Css
import styles from "./PeoplePage.module.css";

const PeoplePage = () => {
  const [people, setPeople] = useState(null);

  const getResource = async (url) => {
    const res = await getApiResource(url);

    const peopleList = res.results.map(({ name, url }) => {
      const id = getPeopleId(url);
      const img = getPeopleImage(id);

      return {
        id,
        name,
        img,
      };
    });

    setPeople(peopleList);
  };

  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);

  return <>{people && <PeopleList people={people} />}</>;
};

export default PeoplePage;
