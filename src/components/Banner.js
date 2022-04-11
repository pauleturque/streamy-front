import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Banner.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import Requests from "../config/Requests";
import axios from "axios";
import QuickView from "./QuickView";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const handleClick = () => {
    popUp ? setPopUp(false) : setPopUp(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(Requests.fetchHorrorMovies);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  const bannerStyle = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  console.log(popUp);

  return (
    <header className="banner" style={bannerStyle}>
      <div className="banner_content">
        <h1 className="banner_title">
          {movie?.title || movie?.original_title || movie?.name}
        </h1>
        <p className="banner_description">{movie?.overview}</p>
        <div className="banner_buttons">
          <Link to={`/video/${movie?.id}`}>
            <button className="banner_button banner_button--play">
              <PlayArrowIcon />
              Lecture
            </button>
          </Link>
          <button
            className="banner_button banner_button--info"
            onClick={handleClick}
          >
            <InfoIcon />
            Plus d'infos
          </button>
        </div>
      </div>
      <QuickView
        bannerStyle={bannerStyle}
        movie={movie}
        popUp={handleClick}
        popUpStatus={popUp}
      />
    </header>
  );
}

export default Banner;
