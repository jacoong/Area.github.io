import React, { useState} from 'react';
import Title from '../../Title'
import MV from '../../MV'
import style from './Visuals.module.css'

const Visuals = ()=> {

    const [textChanged, setTextChanged] = useState(false);
    const [titleVisible, setTitleVisible] = useState(true);

    return(
        <div className={style.container}>
        <div className={style.wrap}>
        {/* <Navbar className={'mainPage'}/> */}
        <Title TitleVisible={titleVisible}></Title>
        <MV></MV>
        {/* <Button className="position">click me</Button> */}
    </div>
    </div>
    )
}

export default Visuals;