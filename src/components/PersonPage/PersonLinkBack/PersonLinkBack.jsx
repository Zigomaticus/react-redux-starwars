// Libraries
import React from "react";
import { useNavigate, Link } from "react-router-dom";
// Static
import { ReactComponent as ArrowLeft } from "../../../static/arrowLeft.svg";
// Css
import styles from "./PersonLinkBack.module.css";

const PersonLinkBack = () => {
  const navigate = useNavigate();

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <Link to="#" onClick={handleGoBack} className={styles.link}>
      <ArrowLeft className={styles.link__img} />
      <span>Go back</span>
    </Link>
  );
};

export default PersonLinkBack;
