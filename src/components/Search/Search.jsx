import React from 'react'
import { useContext } from 'react';
import { SearchContext } from '../../App';
import s from "./Search.module.scss"
const Search = () => {
  const {searchValue, setSearchValue} = useContext(SearchContext);
  return (
    <div className={s.root}>
        <img className={s.icon} src="./img/search.svg" alt="search"/>
        <input value={searchValue} onChange={(event) => setSearchValue(event.target.value)} className={s.input} placeholder='Пошук піци...'/>
        {searchValue&&<img className={s.clear} onClick = {()=>setSearchValue('')}src="./img/btn-remove.svg" alt="btn-remove"/>}
    </div>
 
  )
}

export default Search
