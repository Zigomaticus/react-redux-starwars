import React from "react";
import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL,
} from "../../../context/ThemeProvider";
// Css
import styles from "./ChooseSide.module.css";

const ChooseSide = () => {
  const isTheme = useTheme();

  return (
    <div>
      {isTheme.theme}
      <button onClick={() => isTheme.change(THEME_LIGHT)}>Light</button>
      <button onClick={() => isTheme.change(THEME_DARK)}>Dark</button>
      <button onClick={() => isTheme.change(THEME_NEITRAL)}>Neitral</button>
    </div>
  );
};

export default ChooseSide;
