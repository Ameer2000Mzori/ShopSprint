import { createSlice } from '@reduxjs/toolkit'

const initialState = () =>
  localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : {
        name: null,
        username: null,
        email: null,
        token: null,
      }

export const userInfo = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = {
        name: action.payload.Name,
        username: action.payload.userName,
        email: action.payload.email,
        token: action.payload.token,
      }
      state.name = user.name
      state.username = user.username
      state.email = user.email
      state.token = user.token

      localStorage.setItem('user', JSON.stringify(user))
      // return user
    },

    logOutUser: () => {
      localStorage.removeItem('user')
      return {
        name: null,
        username: null,
        email: null,
        token: null,
      }
    },
  },
})

export const { loginUser, logOutUser } = userInfo.actions

export default userInfo.reducer
