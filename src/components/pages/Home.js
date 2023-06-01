import React, { useState, useRef } from 'react';
import Video from '../Video'
import '../../App.css';
import home from './Home.module.css'
import Main from '../Main_hello'
import Music from '../Music'
import Category from '../Category'
import Title from '../Title'


// import Cards from '../Cards';
// import HeroSection from '../HeroSection';
// import Footer from '../Footer';

const Home = ()=> {
  const videoCode = 'U3u4pQ4WKOk'
  // const [musicSts, setMusicSt] = useState(null);

  const musicRef = useRef(null);

  const [isVisible, setisible] = useState(true);
  const [textChanged, setTextChanged] = useState(true);
  const [TitleVisible, setTitleVisible] = useState(false);
  const [reRenderVideo, setReRenderVideo] = useState(false);

  const handleMusicStart = () => {
    if (musicRef.current) {
      musicRef.current.onPlayVideo();
    }
  };

  const isTitleVisible= () =>{
    setTitleVisible(true);
  }

  const deleteText = () => {
      setisible(!isVisible);
  };

  const textChangeds = (element)=> {
    if(element=='false'){
      setTextChanged(false);
      setReRenderVideo(false)
      return
    }
    else if(element=='true'){
      setTextChanged(false);
      setReRenderVideo(true)
      return
    }
    setTextChanged(!textChanged);
  }

  
  return(
    <div className={textChanged ? home.wrap : home.sescondWrap}>
      {/* <Navbar className={'mainPage'}/> */}
      <Title TitleVisible={TitleVisible}></Title>
      <Main isTextFalse={isVisible} istextChanged={textChanged}></Main>
      <Video isTitleVisible={isTitleVisible} afterClick={deleteText} after2Click={textChangeds} reRenderVideo={reRenderVideo} musicStart={handleMusicStart}></Video>
      <Music ref={musicRef} videoId={videoCode}></Music>
      <Category textChanged={textChanged}></Category>
      {/* <Button className="position">click me</Button> */}
  </div>
);
};

export default Home;
