import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api_service";
import ReactPlayer from "react-player";
import { Chip } from "@mui/material";
import "./videoDetail.css";
import {
  FavoriteBorderOutlined,
  MarkChatRead,
  Tag,
  Visibility,
} from "@mui/icons-material";
import Videos from "../../video/Videos";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideo, setRelatedVideo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `videos?part=snippet,statistics&id=${id}`
        );
        setVideoDetail(data.items[0]);

        const relatedData = await ApiService.fetching(
          `search?part=snippet&relatedToVideoId=${id}&type=video`
        );
        setRelatedVideo(relatedData.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <div className="videoDetail__container" style={{ width: "100%" }}>
      <div
        className="video__inner"
        style={{ width: "70%", marginRight: "20px" }}
      >
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          width={"100%"}
          height={"77vh"}
          className="react-player"
        />
        {videoDetail?.snippet?.tags?.map((item, idx) => (
          <Chip
            label={item}
            key={idx}
            sx={{ marginTop: "10px", cursor: "pointer", ml: "10px" }}
            deleteIcon={<Tag />}
            variant="outlined"
          />
        ))}

        <h4
          style={{
            fontFamily: "Roboto, sans-serif",
            marginTop: "13px",
            marginBottom: "10px",
          }}
        >
          {videoDetail?.snippet?.title}
        </h4>
        <p>{videoDetail?.snippet?.description}</p>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              margin: "5px 10px",
            }}
          >
            <Visibility style={{ marginRight: "5px" }} />
            {videoDetail?.statistics?.viewCount}
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              margin: "5px 10px",
            }}
          >
            <FavoriteBorderOutlined style={{ marginRight: "5px" }} />
            {videoDetail?.statistics?.likeCount}
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              margin: "5px 10px",
            }}
          >
            <MarkChatRead style={{ marginRight: "5px" }} />
            {videoDetail?.statistics?.commentCount}
          </span>
        </div>
      </div>
      <div className="suggest" style={{ width: "24%" }}>
        <Videos videos={relatedVideo && relatedVideo} />
      </div>
    </div>
  );
};

export default VideoDetail;
