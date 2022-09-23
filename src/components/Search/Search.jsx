import React, { useState } from "react";
import {useRef, useMemo } from "react";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import { setSearchValue } from "../../redux/slices/filterSlice";
import s from "./Search.module.scss";
const Search = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  const dispatch = useDispatch();

  const onClickClear = () => {
    setValue("");
    dispatch(setSearchValue(value));
    inputRef.current.focus();
  };
  const updateSearchValue = useMemo(
    () =>
      debounce((str) => {
        setSearchValue(str);
      }, 250),
    [setSearchValue]
  );
  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  return (
    <div className={s.root}>
      <img className={s.icon} src="./img/search.svg" alt="search" />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={s.input}
        placeholder="Пошук піци..."
      />
      {value && (
        <img
          className={s.clear}
          onClick={onClickClear}
          src="./img/btn-remove.svg"
          alt="btn-remove"
        />
      )}
    </div>
  );
};

export default Search;
