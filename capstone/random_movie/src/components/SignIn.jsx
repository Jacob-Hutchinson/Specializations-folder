import axios from 'axios'
import React, { useState } from 'react'


// login is 
export const SignIn = ({setSignIn, setUser}) => {
  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()
  const handlePassword = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
  }
  const handleUserName = (e) => {
    e.preventDefault()
    setUserName(e.target.value)
  }
const handleForm = (e) => {
  e.preventDefault()
  console.log(userName, password)
axios.post('http://localhost:4004/signin', {userName: userName, password: password})
.then(res => {
  setSignIn(false)
  if(res.data[0].user_name){
  console.log(res, 'res data', res.data)
  setUser(res.data[0].user_name)
  alert('user ' + res.data[0].user_name + ' has been added!    NOW PLEASE LOG IN')
  }else {alert('please try again')}
})
}
  return (
    <div>
        <form action="" typeof='submit' onSubmit={handleForm}>
            <label htmlFor="userName">UserName</label>
            <input type="text" placeholder='user name' onChange={handleUserName}/>
            <label htmlFor="Password">Password</label>
            <input type="password" placeholder='password' onChange={handlePassword}/>
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
