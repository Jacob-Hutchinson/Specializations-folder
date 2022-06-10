import "./App.css";
import { RandomMovie } from "./components/RandomMovie";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Random } from "./components/Random";
import { Watchlist } from "./components/Watchlist";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={<RandomMovie />} path="/randomMovie" />
        <Route element={<Watchlist />} path='/watchlist'/>
        <Route element={<Random />} path='random'/>
      </Routes>
    </div>
  );
}

export default App;
