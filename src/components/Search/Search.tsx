import React, { useState } from "react";
import { useRef, useMemo } from "react";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import { setSearchValue } from "../../redux/filter/slice";
import s from "./Search.module.scss";
const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    setValue("");
    dispatch(setSearchValue(""));
    inputRef.current?.focus();
  };
  const updateSearchValue = useMemo(
    () =>
      debounce((str: string) => {
        dispatch(setSearchValue(str));
      }, 250),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setSearchValue]
  );
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
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
