import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice.js'
import productReducer from './features/products/productSlice.js'
import userInfo from './features/user/uesrSlice.js'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    user: userInfo,
  },
})

export default store
