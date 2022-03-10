// Libraries
import React, { useState } from "react";
// Css
import styles from "./SearchPage.module.css";

const SearchPage = () => {
  const [inputSearchValue, setInputSearchValue] = useState("");

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputSearchValue(e.target.value);
  };

  return (
    <>
      <h1 className="header__text">Search</h1>;
      <input
        type="text"
        value={inputSearchValue}
        onChange={handleInputChange}
      />
    </>
  );
};

export default SearchPage;
