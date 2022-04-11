import React from "react";
import { useParams } from "react-router-dom";
import "./Video.scss";

function Video() {
  let { id } = useParams();

  console.log(id);
  return (
    <div className="video">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="video"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Video;
