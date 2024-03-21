import { createSlice } from '@reduxjs/toolkit'

export const productCount = createSlice({
  name: 'product',
  initialState: {
    amount: 0,
  },
  reducers: {
    updateProductsAmount: (state, action) => {
      state.amount = action.payload
    },
  },
})

export const { updateProductsAmount } = productCount.actions

export default productCount.reducer
