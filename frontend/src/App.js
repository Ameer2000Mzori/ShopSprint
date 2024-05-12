import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ChakraProvider } from '@chakra-ui/react'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/pages/navbar/Navbar.jsx'
import NotFoundPage from './components/pages/notfoundpage/NotFoundPage.jsx'
import Home from './components/pages/home/Home.jsx'
import About from './components/pages/about/About.jsx'
import Products from './components/pages/products/Products.jsx'
import Cart from './components/pages/cart/Cart.jsx'
import UtilityBar from './components/pages/navbar/component/UtilityBar.jsx'
import SelectedProduct from './components/pages/selectedproduct/SelectedProduct.jsx'
// import LoginPage from './components/pages/login/LoginPage.jsx'
// import Register from './components/pages/register/Register.jsx'
import ProfilePage from './components/pages/profilePage/ProfilePage.jsx'
// import AddOrder from './components/addorder/AddOrder.jsx'
import CheckOut from './components/pages/checkout/CheckOut.jsx'
import AuthCheck from './components/shared/AuthCheck.jsx'
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector((state) => state.user)

  console.log('information', user)
  const { mutate } = AuthCheck()

  useEffect(() => {
    if (user.token) mutate([{ token: user.token, id: user.id }])
    console.log('this is from app checking user auth ')
  }, [])

  return (
    <ChakraProvider>
      <Router>
        <ToastContainer />
        <UtilityBar />
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<SelectedProduct />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App
