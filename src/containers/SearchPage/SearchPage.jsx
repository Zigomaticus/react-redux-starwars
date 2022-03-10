// Libraries
import React, { useState } from "react";
// Utils
import { getApiResource } from "../../utils/network";
// Constants
import { API_SEARCH } from "../../constants/api";
// Services
import { getPeopleId, getPeopleImage } from "../../services/getPeopleData";
// HOC
import { withErrorApi } from "../../hoc-helper/withErrorApi";
// Css
import styles from "./SearchPage.module.css";

const SearchPage = ({ setErrorApi }) => {
  const [people, setPeople] = useState([]);
  const [inputSearchValue, setInputSearchValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputSearchValue(value);
    getReaponse(value);
  };

  const getReaponse = async (param) => {
    const res = await getApiResource(API_SEARCH + param);

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

  return (
    <>
      <h1 className="header__text">Search</h1>;
      <input
        type="text"
        value={inputSearchValue}
        onChange={handleInputChange}
        placeholder="Search character..."
      />
    </>
  );
};

export default withErrorApi(SearchPage);
