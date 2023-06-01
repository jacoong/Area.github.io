import React, { useState,useEffect } from 'react';
import style from './Video2.module.css';

const Video2 = () => {
    const [VideoContainer, setVideoContainer] = useState(false);
    const [VideoSize, setVideoSize] = useState(false);
    
  
    const operation = () =>{
        setVideoContainer(!VideoContainer);
        setVideoSize(!VideoSize);
        console.log('sefse');
      } 

      const videoContainerClass = VideoContainer ? style.new__video_container : style.video_container;
      const videoClass = VideoSize ? style.new__video_container__video : style.video_container__video;
    


    return (
      
    <div className={videoContainerClass}>
          <video 
            className={videoClass}
            onMouseEnter={operation}
            onMouseLeave={operation}
            src="/videos/main2.mp4"
            autoPlay
            loop
            muted
          />
      </div>
    );
  };

export default Video2;