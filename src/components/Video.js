import React, { useState,useEffect } from 'react';
import style from './Video.module.css';

const Video = ({musicStart,afterClick,after2Click,isTitleVisible,reRenderVideo}) => {
  const [isVideo2Visible, setIsVideo2Visible] = useState(false);
  const [SizeVideo, setSizeVideo] = useState(false);
  const [newVideoContain, setnewVideoContainer] = useState(false);
  



  const operation = () => {
    setIsVideo2Visible(true);
    musicStart();
    afterClick();
  };

  const operation2 = () =>{
    setnewVideoContainer(!newVideoContain);
    setSizeVideo(!SizeVideo);
    after2Click('true');
  }

  const operation3 = () =>{
    setnewVideoContainer(!newVideoContain);
    setSizeVideo(!SizeVideo);
    after2Click('false');
  }


  let sizeProcess = SizeVideo ? 'reduced_container' : '';
  const newVideoContainer = newVideoContain ? 'new_video_container' : '';

  if (SizeVideo){
    isTitleVisible();
  }
  return (
    
<div className={newVideoContainer ? style.new_video_container : (reRenderVideo ? style.video_container2 : style.video_container)}>

      {isVideo2Visible ? (
        <video 
          className={`${style.transfer} ${isVideo2Visible ? style.video2 : style.video} ${style[sizeProcess]}`}
          onMouseEnter={operation2}
          onMouseLeave={operation3}
          src="/videos/main2.mp4"
          autoPlay
          loop
          muted
        />
        
      ) : (
        <video
          // onClick={handleMusic}
          className={style.video}
          onClick={operation}
          src="/videos/astronaut.mp4"
          autoPlay
          loop
          muted
        />
      )}
    </div>
  );
};
export default Video;