import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = ({ onFilterChange }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(changeFilter(value));
    onFilterChange(value);
  };

  return (
    <div className={s.search}>
      <label className={s.label}>
        Find contacts by name
        <input className={s.input} type="text" onChange={handleChange} />
      </label>
    </div>
  );
};

export default SearchBox;
