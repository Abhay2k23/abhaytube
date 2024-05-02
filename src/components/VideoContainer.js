import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideo(json.items);
    // console.log(json);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        return (
          <Link to={"/watch?v=" + video?.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
