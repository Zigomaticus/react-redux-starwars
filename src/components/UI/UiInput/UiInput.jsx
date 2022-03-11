// Libraries
import React from "react";
import cn from "classnames";
// Img
import icon from "./img/cancel.svg";
// Css
import styles from "./UiInput.module.css";
import "../index.css";

const UiInput = ({ value, handleInputChange, placeholder, classes }) => {
  return (
    <div className={cn(styles.wrapper__input, classes)}>
      <input
        type="text"
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
      />
      <img
        src={icon}
        alt="cancel"
        width={15}
        height={15}
        className={cn(styles.clear, !value && styles.clear__disabled)}
        onClick={() => value && handleInputChange("")}
      />
    </div>
  );
};

export default UiInput;
