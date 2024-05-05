import { createSlice } from '@reduxjs/toolkit'
import NotificationCard from '../../shared/NotificationCard'

const initialState = () =>
  localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : {
        name: null,
        username: null,
        email: null,
        token: null,
        id: null,
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
        id: action.payload._id,
      }
      state.name = user.name
      state.username = user.username
      state.email = user.email
      state.token = user.token
      state.id = user.id

      localStorage.setItem('user', JSON.stringify(user))
      // return user
    },

    logOutUser: () => {
      localStorage.removeItem('user')
      NotificationCard({
        option: 'warning',
        message: `logged out successfully`,
      })

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
