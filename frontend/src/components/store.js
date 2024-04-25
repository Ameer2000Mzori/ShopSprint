import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice.js'
import productReducer from './features/products/productSlice.js'
import userInfo from './features/user/userSlice.js'
import routerRedirect from './features/routeRedirect/routeRedirectSlice.js'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    user: userInfo,
    route: routerRedirect,
  },
})

export default store
