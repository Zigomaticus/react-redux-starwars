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
// Hoc
import { withErrorApi } from "../../hoc-helper/withErrorApi";
// Css
import styles from "./PeoplePage.module.css";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
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
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);

  return (
    <>
      <h1>Navigation</h1>
      {people && <PeopleList people={people} />}
    </>
  );
};

export default withErrorApi(PeoplePage);
