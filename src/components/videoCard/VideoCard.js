import React from "react";
import { Avatar, colors } from "@mui/material";
import moment from "moment";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <Link
      to={`/videoDetail/${video.id.videoId}`}
      style={{ textDecoration: "none", color: "#000" }}
    >
      <div className="video__inner">
        <img
          src={video?.snippet?.thumbnails?.high?.url}
          alt="videos"
          width={350}
          height={200}
          className="video__inner_img"
        />
        <div style={{ height: "120px", padding: "6px" }}>
          <p style={{ marginBottom: "8px" }}>
            {moment(video?.snippet?.publishedAt).fromNow()}
          </p>
          <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
            {video?.snippet?.title?.slice(0, 30)}...
          </p>
          <p>{video?.snippet?.description?.toLowerCase().slice(0, 50)}...</p>
        </div>
        <div
          style={{
            height: "40px",
            marginLeft: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar src={video?.snippet?.thumbnails?.high?.url} />
          <span style={{ marginLeft: "5px" }}>
            {video?.snippet.channelTitle}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
