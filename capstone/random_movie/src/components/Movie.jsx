import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/movie.css'
import { MovieCard } from './MovieCard'
import Button from '@mui/material/Button'
import { Providers } from './Providers'



export const Movie = (props) => {
  const [movie, setMovie] = useState()
  const [genre, setGenre] = useState('')
  const [date, setDate] = useState('')
  const [date1, setDate1] = useState('')
  const {route, setRoute} = props

  useEffect(() => {
    setRoute('Movies')
  }, [route])

  const getmovie = (e) => {
    e.preventDefault()
    axios.get('http://localhost:4004/movie')
    .then(res => {
      setMovie(res.data)
    })
  } 
  const handleForm = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4004/movie', {genre: genre, date: date, date1: date1})
    .then(res => {
      if(res.data.title){
        setMovie(res.data)
      }
    else{
      alert('no movie was found. Please try again or change the search Parameters')
    }
    })
    
  }
  const handleGenre = (e) => {
    setGenre(e.target.value)
  }
  const handledate = (e) => {
    setDate(e.target.value)

  }
  const handledate1 = (e) => {
    setDate1(e.target.value)
  }
  const addList = e => {
    e.preventDefault()
    axios.post('http://localhost:4004/list', {id: movie.id})
    .then(res => {
      
    })
  }

  return (
    <div className='movie-div'>
      <br />
      <div className='form'>
      <Button variant="contained" color="primary" size='small' onClick={getmovie}>
        Get Random Movie
      </Button> 
      <br />
      <form className="selector" onSubmit={handleForm}>
        <select name="genre" id="genre" onChange={handleGenre} style={{width: "125px"}} required>
        <option value=""></option>
          <option value="28">action</option>
          <option value="35">Comedy</option>
          <option value="12">Adventure</option>
          <option value="18">Drama</option>
          <option value="14">Fantasy</option>
          <option value="878">Sci-Fi</option>
          <option value="53">Thriller</option>
        </select>
        <label htmlFor="date">From</label>
        <input type="date" onChange={handledate}/>
        <label htmlFor="date1">To</label>
        <input type="date"  onChange={handledate1}/>
      <Button variant="contained" color="primary" className='getButton' type='submit'>
        Generate Movie
      </Button>
      </form>
      </div>
      <br />
      <MovieCard movie={movie} />
      {movie &&
      <Button variant="contained" color="primary" onClick={addList}>
        Add to List
      </Button>}
      {movie ? movie.results.US ?
      <Providers movie={movie}/> : <></> : <></>}
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}
