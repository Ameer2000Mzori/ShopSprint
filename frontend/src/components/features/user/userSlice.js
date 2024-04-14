import { createSlice } from '@reduxjs/toolkit'

export const userInfo = createSlice({
  name: 'product',
  initialState: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : {
        username: null,
        email: null,
        token: null,
      },
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload
      // console.log(` this is it => ${state}`)
    },
  },
})

export const { updateUser } = userInfo.actions

export default userInfo.reducer
