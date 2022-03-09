import { useDispatch } from "react-redux";
import {
  setPersonToFavorite,
  removePersonFromFavorite,
} from "../../../store/actions/index";
// Css
import styles from "./PersonPhoto.module.css";

const PersonPhoto = ({ personPhoto, personName, personId }) => {
  const dispatch = useDispatch();

  const set = () => {
    dispatch(
      setPersonToFavorite({
        [personId]: {
          name: personName,
          img: personPhoto,
        },
      })
    );
  };

  const remove = () => {
    dispatch(removePersonFromFavorite(personId));
  };

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName} />
      </div>
      <button onClick={set}>Добавить в избранное</button>
      <button onClick={remove}>Удалить из избранного</button>
    </>
  );
};

export default PersonPhoto;
