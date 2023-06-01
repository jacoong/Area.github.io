import React, { useState, useRef } from 'react';
import '../../App.css';
import './Main.module.css';


import Title from '../Title'
import Video2 from '../Video2'
import Category from '../Category'
import style from './Main.module.css'
import { Outlet } from 'react-router-dom';


function Main() {

    const [textChanged, setTextChanged] = useState(false);
    const [titleVisible, setTitleVisible] = useState(true);

    return (
        <div className={style.container}>
          <div  className={style.wrap}>
          <Title TitleVisible={titleVisible} />
          <Video2></Video2>
          <Category textChanged={textChanged} />   
          <Outlet />
          </div>
        </div>
      );
    }


  
  export default Main;