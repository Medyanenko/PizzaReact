import React from 'react'
import s from "./Search.module.scss"
const Search = ({searchValue, setSearchValue}) => {
  return (
    <div className={s.root}>
        <img className={s.icon} src="./img/search.svg" alt="search"/>
        <input value={searchValue} onChange={(event) => setSearchValue(event.target.value)} className={s.input} placeholder='Пошук піци...'/>
        {searchValue&&<img className={s.clear} onClick = {()=>setSearchValue('')}src="./img/btn-remove.svg" alt="btn-remove"/>}
    </div>
 
  )
}

export default Search
