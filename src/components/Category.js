import React from 'react';
import style from './Category.module.css';
import Category_container from './Category_container';
import { Link } from 'react-router-dom';

function Category({textChanged}) {
  if (textChanged) {
    return null;
  }

  return (
    <div className={style.container}>
      <Category_container>
        <Link to='/main/about' className={style.Categorycategory__links}>
          <img src='/img/ABOUT.PNG'/>
        </Link>
      </Category_container>

      <Category_container>
        <Link to='/main/contact' className={style.Categorycategory__links}>
          <img src='/img/CONTACT.PNG'/>
        </Link>
      </Category_container>

      <Category_container>
        <Link to='/main/musicPage' className={style.Categorycategory__links}>
          <img src='/img/MUSIC.PNG'/>
        </Link>
      </Category_container>

      <Category_container>
        <Link to='/main/visuals' className={style.Categorycategory__links}>
          <img src='/img/VISUALS.PNG'/>
        </Link>
      </Category_container>

      <Category_container>
        <Link to='/main/creaters' className={style.Categorycategory__links}>
          <img src='/img/CREATERS.PNG'/>
        </Link>
      </Category_container>
    </div>
  );
}


export default Category;

