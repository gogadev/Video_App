import React from "react";

import imgIcon from "../../assets/icon.png";

import "./video-detail.style.css";

const VideoDetail = ({ video }) => {
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="video">
      <div className="info">
        <iframe title="myFrame" className="video-src" src={videoSrc}></iframe>
        <div className="details">
          <h4 className="title"> Youtube Channel</h4>
          <img className="img-icon" src={imgIcon} alt="" />
          <h2 className="channel">~{video.snippet.channelTitle}~</h2>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
