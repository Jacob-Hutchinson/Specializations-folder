import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Food } from './components/Food';
import { Home } from './components/Home';
import { List } from './components/List';
import { Movie } from './components/Movie';
import { NavBar } from './components/NavBar';

function App() {
  const [route, setRoute] = useState('home')
  return (
    <div className={`${route} App`} >
      <h1 className='navbar'>Movie/Food Generator</h1>
      <NavBar setRoute={setRoute} className="navbar"/>
      <Routes>
        <Route path='/' element={<Home setRoute={setRoute} route={route}/>} />
        <Route path='/movie' element={<Movie setRoute={setRoute} route={route}/>} />
        <Route path='/food' element={<Food setRoute={setRoute} route={route}/>} />
        <Route path='/list' element={<List setRoute={setRoute} route={route}/>} />
      </Routes>
    </div>
  );
}

export default App;
