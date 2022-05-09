import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Requests from "../config/Requests";
import axios from "axios";

import "./Video.scss";

function Video() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(Requests.fetchHorrorMovies);
        setMovie(request.data.results);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  console.log(movie);
  return (
    <div className="video">
      <p>{movie.description}</p>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ijgSQvOyoJo"
        controls
        width={"100%"}
      />
    </div>
  );
}

export default Video;
