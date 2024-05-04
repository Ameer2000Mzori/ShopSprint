import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

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
      toast.success('item added successfully')
    },
    removeFromCart: (state, action) => {
      state.price = 0
      state.items = state.items.filter((item) => item.id !== action.payload)
      for (const item of state.items) {
        state.price += item.price * item.amount
      }
      console.log(state.items)
      toast.error('item removed successfully')
      console.log(state.price)
    },
    clearCart: (state) => {
      state.items = []
      toast.warn('items removed successfully')
    },
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
