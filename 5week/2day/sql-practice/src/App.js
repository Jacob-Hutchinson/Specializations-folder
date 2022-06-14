import {useState} from 'react'
import './App.css';
import Button from '@mui/material/Button'
import axios from 'axios'

function App() {
  const [users , setusers] = useState([])
  const [first, setFirst] = useState()
  
const getStuff = () => {
  axios
  .get(`http://localhost:4004/stuff`)
  .then(res => {
    for (let i = 0; i < res.data.length; i++) {
      if(users){
         setusers([])
      }
      setusers( res.data[i])

    }
    // setusers(res.data)
    setFirst(res.data[0].first_names)
  })
  console.log(users)
}

  return (
    <div className="App">
       <br />
      <Button variant="contained" color="primary" size='medium' onClick={getStuff}>
        hello
      </Button>
    </div>
  );
}

export default App;
