import React, { useState } from 'react'
import '../styles/movie.css'
import { Providers } from './Providers'

export const MovieCard = ({movie}) => {
  return (
    <div className='movieCard'>
        <div className='image'>
        {movie && <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt='movie poster'/>}
        </div>
        <div className='movieDescription'>
            <div className='title'>
        {movie && <h1>Title: <br />{movie.title}</h1>}
        {movie && <h4>{movie.tagline}</h4>}
            </div>
        <div className='description'>
        {movie && <h2>Release-Date: {movie.release_date.split('-').reverse().join('/')}</h2>}
        {movie && <h2>Rated: {movie.vote_average}/10</h2>}
        {movie && <h2>Description: <br />{movie.overview}</h2>}
        </div>
        </div>
        <Providers movie={movie} />
    </div>
  )
}
