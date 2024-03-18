import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload)
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
