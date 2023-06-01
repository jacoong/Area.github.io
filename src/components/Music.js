import React, { Component } from 'react';
import './Music.css';

class Music extends Component {
  playerRef = React.createRef();

  componentDidMount() {
    const { videoId } = this.props;
    if (window.YT) {
      this.createPlayer(videoId);
    } else {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';

      window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady;

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  }

  

  componentWillUnmount() {
    if (this.playerRef.current) {
      this.playerRef.current.destroy();
    }
  }

  onYouTubeIframeAPIReady = () => {
    const { videoId } = this.props;
    this.createPlayer(videoId);
  };

  createPlayer = (videoId) => {
    this.playerRef.current = new window.YT.Player('ytplayer', {
      height: '360',
      width: '640',
      videoId: videoId,
    });
  };

  onPlayVideo = () => {
    if (this.playerRef.current && this.playerRef.current.playVideo) {
      this.playerRef.current.playVideo();
    }
  };

  render() {
    return (
      <div>
        <div id="ytplayer"></div>
      </div>
    );
  }
}

export default Music;

