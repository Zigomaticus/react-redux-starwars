// Libraries
import React, { useState, useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
// Hoc
import { withErrorApi } from "../../hoc-helper/withErrorApi";
// Components
import PersonInfo from "../../components/PersonPage/PersonInfo/PersonInfo";
import PersonPhoto from "../../components/PersonPage/PersonPhoto/PersonPhoto";
import PersonLinkBack from "../../components/PersonPage/PersonLinkBack/PersonLinkBack";
// Ui
import UiLoading from "../../components/UI/UiLoading/UiLoading";
// Utils
import { getApiResource } from "../../utils/network";
// Services
import { getPeopleImage } from "../../services/getPeopleData";
// Constants
import { API_PERSON } from "../../constants/api";
// Css
import styles from "./PersonPage.module.css";

const PersonFilms = React.lazy(() =>
  import("../../components/PersonPage/PersonFilms/PersonFilms")
);

const PersonPage = ({ setErrorApi }) => {
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  const [personId, setPersonId] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}`);

      setPersonId(id);
      if (res) {
        setPersonInfo([
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Hair Color", data: res.hair_color },
          { title: "Skin Color", data: res.skin_color },
          { title: "Eye Color", data: res.eye_color },
          { title: "Birth Year", data: res.birth_year },
          { title: "Gender", data: res.gender },
        ]);

        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));

        res.films.length && setPersonFilms(res.films);
      }
      setErrorApi(!res);
    })();
  }, []);

  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          <PersonPhoto
            personPhoto={personPhoto}
            personName={personName}
            personId={personId}
          />
          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<UiLoading />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

export default withErrorApi(PersonPage);
