// Libraries
import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
// Utils
import { getApiResource } from "../../utils/network";
// Constants
import { API_SEARCH } from "../../constants/api";
// Components
import SearchPageInfo from "../../components/SearchPage/SearchPageInfo/SearchPageInfo";
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
    debounceGetResponse(value);
  };

  const getReaponse = async (param) => {
    console.log(param);
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
      setErrorApi(!res);
    }
  };

  useEffect(() => {
    getReaponse("");
  }, []);

  const debounceGetResponse = useCallback(
    debounce((value) => getReaponse(value), 300),
    []
  );

  return (
    <>
      <h1 className="header__text">Search</h1>;
      <input
        type="text"
        value={inputSearchValue}
        onChange={handleInputChange}
        placeholder="Search character..."
        className={styles.input__search}
      />
      <SearchPageInfo people={people} />
    </>
  );
};

export default withErrorApi(SearchPage);
