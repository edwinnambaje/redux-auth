import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  msg: '',
  user: '',
  token: '',
  loading: false,
  error: ''
}
export const signupuser = createAsyncThunk('signupuser', async body => {
  const res = await fetch('http://localhost:5000/users/signup', {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  return await res.json()
})
export const loginuser = createAsyncThunk('loginuser', async body => {
  const res = await fetch('http://localhost:5000/users/login', {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  return await res.json()
})
const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.action = localStorage.getItem('token')
    },
    addUser: (state, action) => {
      state.action = localStorage.getItem('user')
    },
    logout: (state, action) => {
      state.token = null
      localStorage.clear()
    }
  },
  extraReducers: {
    [signupuser.pending]: (state, action) => {
      state.loading = true
    },
    [signupuser.fulfilled]: (state, { payload: { error, msg } }) => {
      state.loading = false
      if (error) {
        state.error = error
      } else {
        state.msg = msg
      }
    },
    [signupuser.rejected]: (state, action) => {
      state.loading = true
    },
    [loginuser.pending]: (state, action) => {
      state.loading = true
    },
    [loginuser.fulfilled]: (
      state,
      { payload: { error, msg, token, user } }
    ) => {
      state.loading = false
      if (error) {
        state.error = error
      } else {
        state.msg = msg
        state.token = token
        state.user = user

        localStorage.setItem('msg', msg)
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
      }
    },
    [loginuser.rejected]: (state, action) => {
      state.loading = true
    }
  }
})
export const { addToken, addUser, logout } = authSlice.actions
export default authSlice.reducer
