import React from "react";

import VideoDetail from "../video-detail/VideoDetail";

import "./video-list.style.css";

const VideoList = ({ videos }) => {
  return (
    <div className="videos">
      <div className="list">
        {videos &&
          videos.map((video, id) => {
            return <VideoDetail key={id} video={video} />;
          })}
      </div>
    </div>
  );
};

export default VideoList;
