import React from 'react'

export const WatchProvider = (props) => {
    let streaming 
    if(props.watchProvider){
         streaming = props.watchProvider.map(el => {
            return <h4>{el.provider_name}</h4>
        })

    }
  return (
    <>
        <h4>Streaming providers:</h4>
        {streaming}
    </>
  )
}
