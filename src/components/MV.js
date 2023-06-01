import React, { useState} from 'react';
import style from './MV.module.css';
import { Link } from 'react-router-dom';

const MV = ()=> {

    return(

        <div className={style.container}>
            <div className={style.container__video}>
                <Link to='https://www.youtube.com/watch?v=SL4SyEGI-Mk' className={style.Categorycategory__links}>
                <img src='/img/Music1.jpg' alt='something wrong'/>
                </Link>
           </div>
           <div className={style.container__video}>
                <img src='/img/Music1.jpg' alt='something wrong'/>
           </div>
           <div className={style.container__video}>
                <img src='/img/Music1.jpg' alt='something wrong'/>
           </div>
           <div className={style.container__video}>
                <img src='/img/Music1.jpg' alt='something wrong'/>
           </div>
           <div className={style.container__video}>
                <img src='/img/Music1.jpg' alt='something wrong'/>
           </div>
           <div className={style.container__video}>
                <img src='/img/Music1.jpg' alt='something wrong'/>
           </div>
           <div className={style.container__video}>
                <img src='/img/Music1.jpg' alt='something wrong'/>
           </div>
           <div className={style.container__video}>
                <img src='/img/Music1.jpg' alt='something wrong'/>
           </div>
           <div className={style.container__video}>
                <img src='/img/Music1.jpg' alt='something wrong'/>
           </div>
           <div className={style.container__video}>
                <img src='/img/Music1.jpg' alt='something wrong'/>
           </div>


        </div>
    )
}

export default MV;