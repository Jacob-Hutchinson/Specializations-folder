import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { Toolbar, Button,  } from '@mui/material';
import {useAuth0} from '@auth0/auth0-react'
import '../styles/navbar.css'

const Navbar = () => {
  const {loginWithPopup, logout, user, isAuthenticated,} = useAuth0()
  const [login, setLogin] = useState(false)
  // if(user) {
  //   setLogin(true)
  // }

  return (
    <header style={{display: 'flex'}}>
      {/* this is the original movie  */}

      <Toolbar color='text' sx={{display: 'flex', alignitem: 'center'}}>
        <Link to='/'>
        <Button variant="contained" color="secondary">
          home
        </Button>
        </Link>
        <Link to='/randomMovie'>
        <Button variant="contained" color="secondary">Random Movie</Button>
        </Link>
        <Link to='/random'>
        <Button variant="contained" color="secondary">Random</Button>
        </Link>
        {login && <Link to='/watchlist'>
        <Button variant="contained" color="secondary">Watchlist</Button>
        </Link>}
      </Toolbar>
        <div className='login' style={{display: "flex", backgroundColor: '#263238'}}>
          {user && <h2>{user.name.includes('@') ? user.nickname : user.name}</h2>}
        {!user && <Button variant="contained" color="secondary" onClick={loginWithPopup}>
       login
     </Button>}
     {user && <Button variant="contained" color="secondary" onClick={logout}>
       logout
     </Button>}
        </div>
    </header>
  )
}

export default Navbar