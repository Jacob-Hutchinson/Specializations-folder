import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App8 = () => {
 const [data, setData] = useState(undefined)

 useEffect(() => {
   axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`)
   .then((res) => {
     console.log(res.data)
     setData(res.data)
   })}, []
)

  return (
    <div>
      {data?.abilities.map((el) => (
        <h4 key={el.slot}>{el.ability.name}</h4>
      ))}
    </div>
  )
}

export default App8