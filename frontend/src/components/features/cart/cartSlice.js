import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    price: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload)
      state.price += action.payload.total
      console.log(state.price)
    },
    removeFromCart: (state, action) => {
      state.price = 0
      state.items = state.items.filter((item) => item.id !== action.payload)
      for (const item of state.items) {
        state.price += item.price * item.amount
      }
      console.log(state.items)
      console.log(state.price)
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
