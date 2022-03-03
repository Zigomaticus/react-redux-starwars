// Libraries
import React, { useEffect, useState } from "react";
// Utils
import { getApiResource, changeHTTP } from "../../utils/network";
// Constance
import { API_PEOPLE } from "../../constants/api";
// Components
import PeopleList from "../../components/PeoplePage/PeopleList/PeopleList";
import PeopleNavigation from "../../components/PeoplePage/PeopleNavigation/PeopleNavigation";
// Services
import {
  getPeopleId,
  getPeopleImage,
  getPeoplePageId,
} from "../../services/getPeopleData";
// Hooks
import { useQueryParams } from "../../hooks/useQueryParams";
// Hoc
import { withErrorApi } from "../../hoc-helper/withErrorApi";
// Css
import styles from "./PeoplePage.module.css";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [coutertPage, setCoutertPage] = useState(1);

  const query = useQueryParams();
  const queryPage = query.get("page");

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
      setPrevPage(changeHTTP(res.previous));
      setNextPage(changeHTTP(res.next));
      setCoutertPage(getPeoplePageId(url));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, []);

  return (
    <>
      <PeopleNavigation
        getResource={getResource}
        prevPage={prevPage}
        nextPage={nextPage}
        coutertPage={coutertPage}
      />
      {people && <PeopleList people={people} />}
    </>
  );
};

export default withErrorApi(PeoplePage);
