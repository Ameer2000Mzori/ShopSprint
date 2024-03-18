import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload)
      state.total += action.payload.price
    },
  },
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
