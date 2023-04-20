import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signupuser } from '../redux/authSlice'
export default function Register () {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('')
  const dispatch = useDispatch()
  const registerHandle = () => {
    console.log(username, email, password, gender)
    dispatch(
      signupuser({
        username,
        email,
        password,
        gender
      })
    )
  }

  return (
    <div>
      <div className='flex flex-column align-items-center'>
        <h3>Register</h3>
        <label htmlFor=''>username</label>
        <input
          type='text'
          placeholder='username'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
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
        <label htmlFor=''>gender</label>
        <input
          type='text'
          placeholder='gender'
          value={gender}
          onChange={e => setGender(e.target.value)}
        />
        <button className='mt-3' onClick={registerHandle}>
          Register
        </button>
      </div>
    </div>
  )
}
