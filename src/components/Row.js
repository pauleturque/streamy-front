import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Row.scss";
import { Link } from "react-router-dom";

function Row({ title, fetchUrl, isPoster }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [fetchUrl]);

  console.log("fetch : " + fetchUrl);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__images">
        {movies.map((movie) => [
          <div key={movie.id}>
            <Link to={`/video/${movie.id}`}>
              {isPoster ? (
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  className="row__image"
                  alt={movie?.title || movie?.original_title || movie?.name}
                />
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  className="row__image"
                  alt={movie?.title || movie?.original_title || movie?.name}
                />
              )}
            </Link>
          </div>,
        ])}
      </div>
    </div>
  );
}

export default Row;
