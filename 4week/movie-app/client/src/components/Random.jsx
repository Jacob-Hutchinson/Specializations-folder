import React, { useState } from "react";
import axios from "axios";
import { WatchProvider } from "./WatchProvider";
import { RandomMovie } from "./RandomMovie";
import {FormControl, Select, MenuItem, Button} from '@mui/material'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'


export const Random = () => {
  const [movieTitle, setMovieTitle] = useState();
  const [moviePoster, setMoviePoster] = useState("");
  const [desc, setDesc] = useState("");
  const [providers, setProviders] = useState([]);
  const [option, setOption] = useState("");

  
  const handleClick = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:4004/genre`, { genre: option })
    .then((res) => {
      setMovieTitle(res.data.title);
      setMoviePoster(res.data.poster_path);
      setDesc(res.data.overview);
      setProviders(res.data.results.US.flatrate);
      console.log(res.data.title, ' ', res.data.genres);
    });
  };
  const handleOption = (e) => {
    setOption(e.target.value);
  };
  return (
    <div>
      {/* <FormControl>
        <FormLabel id='form' sx={{color: "white"}}>select a genre</FormLabel>
        <Select labelId="form" variant="standard">
          <MenuItem value=''></MenuItem>
          <MenuItem value='action'>Action</MenuItem>
          <MenuItem value='aomedy'>Comedy</MenuItem>
          <MenuItem value='adventure'>Adventure</MenuItem>
        </Select>
        
        <FormHelperText></FormHelperText>
      </FormControl> */}
      <form typeof="submit" onSubmit={handleClick}>
        <select name="" id="" onChange={handleOption}>
          <option value=""></option>
          <option value="28">action</option>
          <option value="35">Comedy</option>
          <option value="12">Adventure</option>
          <option value="18">Drama</option>
          <option value="14">Fantasy</option>
          <option value="878">Sci-Fi</option>
          <option value="53">Thriller</option>
        </select>
        <input type="submit" value="submit" />
      </form>
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
