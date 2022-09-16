import React from 'react'
import s from './NotFoundBlock.module.scss'

const NotFoundPageBlock = () => {
  return (
    <div className={s.root}>
        <span>😕</span>
        <br/>
      <h1>Сторінку не знайдено</h1>
      <p className={s.description}>На жаль, цієї сторінки не існує на всій планеті</p>
    </div>
  )
}

export default NotFoundPageBlock

