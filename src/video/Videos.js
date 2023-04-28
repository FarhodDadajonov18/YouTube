import React from "react";

import ChannelCard from "../components/channelCard/ChannelCard";
import VideoCard from "../components/videoCard/VideoCard";

const Videos = ({ videos }) => {
  return (
    <div className="video__header">
      {videos.map((video) => {
        return (
          <div key={video.id.videoId}>
            {video.id.videoId && <VideoCard video={video} />}
            {video.id.channelId && <ChannelCard video={video} />}
          </div>
        );
      })}
    </div>
  );
};

export default Videos;
