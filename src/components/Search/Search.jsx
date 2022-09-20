import React, { useState } from "react";
import { useContext, useRef, useMemo } from "react";
import debounce from "lodash.debounce";
import { SearchContext } from "../../App";
import s from "./Search.module.scss";
const Search = () => {
  const { setSearchValue } = useContext(SearchContext);
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const onClickClear = () => {
    setValue("");
    setSearchValue("");
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
