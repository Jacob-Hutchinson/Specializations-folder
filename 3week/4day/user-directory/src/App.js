import React, {useState} from 'react'
import './App.css';
import Header from './components/Header';
import UserCard from './components/UserCard';
import data from './data';

function App() {
  const [dirData, setDirData] = useState(data)
  const [index, setIndex] = useState(0)



  return (
    <div className="App">
      <Header />
      <UserCard data={dirData} index={index}/>
    </div>
  );
}

export default App;
