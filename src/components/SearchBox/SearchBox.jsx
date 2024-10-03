import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.search}>
      <label className={s.label}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          className={s.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;
