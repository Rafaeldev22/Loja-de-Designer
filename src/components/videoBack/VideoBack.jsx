// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./videoBack.css";

function VideoBackground() {
  return (
    <div className="video-container">
    <video autoPlay loop muted playsInline className="video-background">
      <source src="https://i.imgur.com/hkzEp0v.mp4" type="video/mp4" />
      Seu navegador não suporta vídeos em HTML5.
    </video>
  </div>
  );
}

export default VideoBackground;
