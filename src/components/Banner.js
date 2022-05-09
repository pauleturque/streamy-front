import React, { useContext } from "react";
import { useState, useEffect } from "react";
import "./Banner.scss";
import Requests from "../config/Requests";
import axios from "axios";
import QuickView from "./QuickView";
import Auth from "../contexts/Auth";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
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

  return (
    <header className="banner" style={bannerStyle}>
      <div className="banner_content">
        <p className="banner_description">
          Naviguez parmi les films les plus demandés et faites votre choix !
        </p>
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
