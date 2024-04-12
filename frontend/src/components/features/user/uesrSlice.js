import { createSlice } from '@reduxjs/toolkit'

export const userInfo = createSlice({
  name: 'product',
  initialState: {
    user: [],
  },
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload
    },
  },
})

export const { updateUser } = userInfo.actions

export default userInfo.reducer
