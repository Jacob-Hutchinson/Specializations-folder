import React from 'react'
import '../styles/usercard.css'

const UserCard = (props) => {
    const {data, index} = props
    console.log(data[0])
  return (
    <div className='background'>
        <div className='card'>
                    <h3 className='id'>{data[index].id}</h3>
            <div className='card-data'>
                <div className='name'>
                    <h1>{data[index].name.first} {data[index].name.last}</h1>
                </div>
                <div className='about'>
                    <h3>From: {data[index].city}, {data[index].country}</h3>
                    <h3>Job Title: {data[index].title}</h3>
                    <h3>Employer: {data[index].employer}</h3>
                </div>
                <div className='movie'>
                    <h2>Favorite Movies:</h2>
                    <ol>
                    <li>{data[index].favoriteMovies[0]}</li>
                    <li>{data[index].favoriteMovies[1]}</li>
                    <li>{data[index].favoriteMovies[2]}</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className='button-con'>
            <div className='edit-buttons'>
            <button className='info-button'>Edit</button>
            <button className='info-button'>Delete</button>
            <button className='info-button'>New</button>
          </div> 
        </div>
    </div>
  )
}

export default UserCard