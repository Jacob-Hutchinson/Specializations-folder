import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import '../styles/list.css'

export const List = (props) => {
  const [movieObj, setMovieObj] = useState()
  let [load, setLoad] = useState(0)

  useEffect(() => {
    axios.get(`http://localhost:4004/list`)
    .then(res => {
      console.log(res)
      setMovieObj(res.data)
    })
  }, [setLoad])
  console.log(movieObj)
  const deleteMovie = (e) => {
    axios.delete(`http://localhost:4004/list/${e.target.value}`)
    .then(res => {
      setLoad(load++)
      alert('movie has been deleted from list')
    })
  }
  return (
    <div className='pcard'>
       {movieObj && movieObj.map(el => {
        return <div className="card">
          <div>
        <div className="img">
        <img id='image'
      src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
      alt='movie poster'/>
        </div>
        <div className="title">
          <h2>{el.title}</h2>
            </div>
      <Button variant="contained" color="primary" value={el.id} onClick={deleteMovie}>
        remove from list
      </Button>
      </div>
      </div>
       })}
    </div>
  )
}
