import React from 'react';
import style from './Title.module.css';
import { Link } from 'react-router-dom';

function Title({TitleVisible}) {
  if (!TitleVisible) {
    return null;
  }

  return (
    <div className={style.container}>
        <Link to='/main' className={style.container__links}>
          <div className={style.title}>
          <h1>AreA</h1>
          </div>
        </Link>
    </div>
  );
}

export default Title;
