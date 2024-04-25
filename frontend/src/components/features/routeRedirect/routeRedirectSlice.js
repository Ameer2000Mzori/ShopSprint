import { createSlice } from '@reduxjs/toolkit'

const routerRedirect = createSlice({
  name: 'router',
  initialState: {
    redirect: false,
    path: '',
  },
  reducers: {
    addRedirectRoute: (state, action) => {
      state.redirect = true
      state.path = action.payload
    },
  },
})

export const { addRedirectRoute } = routerRedirect.actions

export default routerRedirect.reducer
