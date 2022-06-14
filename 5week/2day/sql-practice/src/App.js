import {useState} from 'react'
import './App.css';
import Button from '@mui/material/Button'
import axios from 'axios'


function App() {
  const [users , setusers] = useState()
  const [first, setFirst] = useState()
  let [id, setId] = useState(0)
  
const getStuff = () => {
  axios
  .get(`http://localhost:4004/stuff`)
  .then(res => {
    // console.log(res.data)
    setusers(res.data)
  })
}
const next = (e) => {
  e.preventDefault()
  setId(id += 1)
}
const pre = (e) => {
  e.preventDefault()
  setId(id -= 1)
}
console.log(users)
  return (
    <div className="App">
      <Button variant="outlined" color="primary" size='large' onClick={getStuff}>
        get users
      </Button> <br />
      {users && users[id].first_names}
      <br />
      {users && users[id].last_names}
      <br />
      {users && users[id].age}
      <br />
      {users && users[id].job}
       <br />
      <br />
      {id > 0 ? <Button variant="contained" color="secondary" size='small' onClick={pre}>
        previous
      </Button> : <></> }
      {id < 4 ? <Button variant="contained" color="secondary" size='small' onClick={next}>
        next
      </Button> : <></>}
    </div>
  );
}

export default App;
