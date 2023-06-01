import React, { useState} from 'react';
import Title from '../../Title'
import Category from '../../Category'

const Creaters = ()=> {

    const [textChanged, setTextChanged] = useState(false);
    const [titleVisible, setTitleVisible] = useState(true);

    return(
        <div>
        {/* <Navbar className={'mainPage'}/> */}
        <Title TitleVisible={titleVisible}></Title>
        <h1>Creaters Page</h1>
        <Category textChanged={textChanged}></Category>
        {/* <Button className="position">click me</Button> */}
    </div>
    )
}

export default Creaters;