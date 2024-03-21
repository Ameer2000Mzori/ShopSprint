import { createSlice } from '@reduxjs/toolkit'

export const productCount = createSlice({
  name: 'product',
  initialState: {
    amount: 0,
  },
  reducers: {
    updateProductsAmount: (state, action) => {
      state.amount = action.payload.amount
      console.log(state.amount)
    },
  },
})

export const { updateProductsAmount } = productCount.actions

export default productCount.reducer
