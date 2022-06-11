import React, { useEffect, useState } from "react";
import axios from "axios";
import { WatchProvider } from "./WatchProvider";
import "../styles/randommovie.css";
import {Button} from 'antd'


export const RandomMovie = () => {
  const [movieTitle, setMovieTitle] = useState();
  const [moviePoster, setMoviePoster] = useState("");
  const [desc, setDesc] = useState("");
  const [providers, setProviders] = useState([]);

  const handleClick = () => {
    // movieList?setMovieList(''): axios.get(`http://localhost:4004/movies`).then(res => {console.log(res.data.title)setMovieList(res.data)})
      axios.get(`http://localhost:4004/movies`).then((res) => {
        setMovieTitle(res.data.title);
        setMoviePoster(res.data.poster_path);
        setDesc(res.data.overview);
        if(res.data.results.US){
        setProviders(res.data.results.US.flatrate);
        }
      });
  };

  return (
    <div>
      <Button onClick={handleClick}>Get a random Movie</Button>
      <br />
      {movieTitle}
      <div style={{ display: "flex" }}>
        {movieTitle && (
          <img
            src={`https://image.tmdb.org/t/p/w500${moviePoster}`}
            alt='movie poster'
            style={{ height: "70vh" }}
          />
        )}
        <div id="moviestuff">
          {movieTitle && <h4>{desc}</h4>}
          {movieTitle && <WatchProvider watchProvider={providers} />}
        </div>
      </div>
    </div>
  );
};
