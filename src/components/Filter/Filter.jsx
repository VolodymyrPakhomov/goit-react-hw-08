import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filters/slice";
import styles from "./Filter.module.css";

function Filter() {
  const dispatch = useDispatch();

  return (
    <label className={styles.filter}>
      Find contacts by name or number
      <input
        type="text"
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
}

export default Filter;
