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
      <h1>Movie selesctor</h1>
      <NavBar changeClassName={setRoute}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie' element={<Movie />} />
        <Route path='/food' element={<Food />} />
        <Route path='/list' element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
