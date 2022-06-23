import React, { useEffect } from 'react'

export const Food = (props) => {
  const {route, setRoute} = props

  useEffect(() => {
    setRoute('Food')
  }, [route])
  return (
    <div>Food</div>
  )
}
