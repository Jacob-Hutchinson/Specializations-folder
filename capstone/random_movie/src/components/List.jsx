import axios from 'axios'
import React, { useEffect } from 'react'

export const List = (props) => {

  useEffect(() => {
    axios.get(`http://localhost:4004/list`)
    .then(res => {
      console.log(res)
    })
  }, [])
  return (
    <div>
        <h1>this is the new list stuff</h1>
    </div>
  )
}
