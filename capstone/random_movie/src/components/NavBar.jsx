import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

export const NavBar = (props) => {
    const {changeClassName} = props
    const handleClick = (str) => {
        changeClassName(str.target.textContent)
    }
  return (
    <div>
        <Link to={'/'}>
            <Button variant="outlined" color="primary" onClick={handleClick} sx={{textdecoration: 'none'}}>
              Home
            </Button>
        </Link>
        <Link to={'/movie'}>
            <Button variant="outlined" color="primary" onClick={handleClick}>
              Movies
            </Button>
        </Link>
        <Link to={'/food'}>
            <Button variant="outlined" color="primary" onClick={handleClick}>
              Food
            </Button>
        </Link>
        <Link to={'/list'}>
            <Button variant="outlined" color="primary">
              List
            </Button>
        </Link>
    </div>
  )
}
