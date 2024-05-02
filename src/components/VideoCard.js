import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  return (
    <div className="p-2 m-2 w-72 shadow-lg cursor-pointer">
      <img
        className="rounded-lg"
        src={info?.snippet?.thumbnails?.medium?.url}
      />
      <ul>
        <li className="font-bold py-2">{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>Likes :{info?.statistics?.likeCount}k</li>
        <li>Views :{info?.statistics?.viewCount}k</li>
      </ul>
    </div>
  );
};

export default VideoCard;
