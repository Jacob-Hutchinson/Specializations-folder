import React, {usestate, useEffect} from 'react'
import axios from 'axios'

const [apiData, setApiData] = usestate('')
useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/4`)
.then(res => {
  console.lop(res)
  setApiData(res.date)
})
}, [])

const ApiData = () => {

  
  return (
    <div>
        {apiData}
    </div>
  )
}

export default ApiData