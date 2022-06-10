import React from 'react'
import {Link} from 'react-router-dom'
import { Toolbar, Button, AppBar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <nav>
      {/* this is the original movie  */}

    <AppBar position="static" color="text" sx={{display: "flex",alignItems: "center"}}>
      <Toolbar color='text'>
        <Link to='/'>
        <Button>Home</Button>
        </Link>
        <Link to='/randomMovie'>
        <Button>Random Movie</Button>
        </Link>
        <Link to='/random'>
        <Button>Random</Button>
        </Link>
        <Link to='/watchlist'>
        <Button>Watchlist</Button>
        </Link>
      </Toolbar>
    </AppBar>

    </nav>
  )
}

export default Navbar