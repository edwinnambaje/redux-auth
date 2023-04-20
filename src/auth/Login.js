import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginuser, logout } from '../redux/authSlice'
export default function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const loginHandle = () => {
    console.log(email, password)
    dispatch(
      loginuser({
        email,
        password
      })
    )
  }
  const logoutHandler=()=>{
    dispatch(logout)
  }

  return (
    <div>
      <div className='flex flex-column align-items-center'>
        <h3>Register</h3>
        <label htmlFor=''>email</label>
        <input
          type='email'
          placeholder='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor=''>password</label>
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className='mt-3' onClick={loginHandle}>
          Login
        </button>
        <button onClick={logoutHandler}>logout</button>
      </div>
    </div>
  )
}
