import React from "react";
import { useState, useEffect } from "react";
import "./Banner.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import Requests from "../config/Requests";
import axios from "axios";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
        try{
            const request = await axios.get(Requests.fetchHorrorMovies);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
        } catch(error) {
            console.error(error.message);
        }

    }
    fetchData();
  }, []);

  const bannerStyle = {
      backgroundImage : "",
      backgroundSize: "cover",
      backgroundPosition: "center center",
  };

  console.log(movie);

  return (
    <header className="banner">
      <div className="banner_content">
        <h1 className="banner_title">{movie?.title || movie?.original_title}</h1>
        <p className="banner_description">{movie?.overview}</p>
        <div className="banner_buttons">
          <button className="banner_button banner_button--play">
            <PlayArrowIcon />
            Lecture
          </button>
          <button className="banner_button banner_button--info">
            <InfoIcon />
            Plus d'infos
          </button>
        </div>
      </div>
    </header>
  );
}

export default Banner;
