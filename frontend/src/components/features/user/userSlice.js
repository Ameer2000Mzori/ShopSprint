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
        name: action.payload.name,
        username: action.payload.userName,

        email: action.payload.email,
        token: action.payload.token,
      }
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

export const { loginUser } = userInfo.actions

export default userInfo.reducer
