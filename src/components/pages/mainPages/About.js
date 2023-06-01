import React, { useState} from 'react';
import Title from '../../Title'
import Category from '../../Category'
import about from '../mainPages/About.module.css'

const About = ()=> {

    const [textChanged, setTextChanged] = useState(false);
    const [titleVisible, setTitleVisible] = useState(true);

    return(
        <div className={about.wrap}>
        {/* <Navbar className={'mainPage'}/> */}
        <Title TitleVisible={titleVisible}></Title>
        <h1>About Page</h1>
        <Category textChanged={textChanged}></Category>
        {/* <Button className="position">click me</Button> */}
    </div>
    )
}

export default About;