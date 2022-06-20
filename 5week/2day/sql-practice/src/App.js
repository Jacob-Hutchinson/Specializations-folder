import {useState} from 'react'
import './App.css';
import Button from '@mui/material/Button'
import axios from 'axios'
import Typography from '@mui/material/Typography'




function App() {
  const [users , setusers] = useState()
  let [id, setId] = useState(0)
  
const getStuff = () => {
  axios
  .get(`http://localhost:4004/stuff`)
  .then(res => {
    // console.log(res.data)
    setusers(res.data)
  })
}
console.log(users)
const next = (e) => {
  e.preventDefault()
  setId(id += 1)
}
const pre = (e) => {
  e.preventDefault()
  setId(id -= 1)
}
  return (
    <div className="App">
      <Button variant="outlined" color="primary" size='large' onClick={getStuff}>
        get users
      </Button> <br />
      {users && <div style={{margin: "50px"}}>
      <Typography variant="h4">
      user: {users &&  users[id].id}
      </Typography>
      <br />
      <Typography variant="h4" color="initial">
      first name: {users && users[id].first_names}
      </Typography>
      <br />
      <Typography variant="h4" color="initial">
      last name: {users && users[id].last_names}
      </Typography>
      <br />
      <Typography variant="h4" color="initial">
      age :{users && users[id].age}
      </Typography>
      <br />
      <Typography variant="h4" color="initial">
      job: {users && users[id].job}
      </Typography>
       <br />
      <br />
      <Button variant="contained" color="primary" onClick={next}>
        edit
      </Button>
      <div>
      {id > 0 ? <Button variant="text" color="primary" size='large' onClick={pre} sx={{margin: "20px"}}>
        previous
      </Button> : <></> }
      {id < users.length - 1 ? <Button variant="text" color="primary" size='large' onClick={next} sx={{margin: "20px"}}>
        next
      </Button> : <></>}
      </div>
      </div>}
    </div>
  );
}

export default App;
