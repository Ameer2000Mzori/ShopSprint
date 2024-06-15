import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ChakraProvider } from '@chakra-ui/react'
import 'react-toastify/dist/ReactToastify.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Navbar from './components/pages/navbar/Navbar.jsx'
import NotFoundPage from './components/pages/notfoundpage/NotFoundPage.jsx'
import Home from './components/pages/home/Home.jsx'
import About from './components/pages/about/About.jsx'
import Products from './components/pages/products/Products.jsx'
import Cart from './components/pages/cart/Cart.jsx'
import UtilityBar from './components/pages/navbar/component/UtilityBar.jsx'
import SelectedProduct from './components/pages/selectedproduct/SelectedProduct.jsx'
// import UserDashBoard from './components/pages/userdashboard/components/userDashBoard.jsx'
// import LoginPage from './components/pages/login/LoginPage.jsx'
// import Register from './components/pages/register/Register.jsx'
import ProfilePage from './components/pages/userdashboard/uesrProfile.jsx'
// import AddOrder from './components/addorder/AddOrder.jsx'
import CheckOut from './components/pages/checkout/CheckOut.jsx'
import VerifyPage from './components/pages/verify/VerifyPage.jsx'
import UserOrders from './components/pages/userdashboard/userOrders.jsx'

function Main() {
  const location = useLocation()

  const shouldRenderNavbar =
    location.pathname !== '/userdashboard/profile' &&
    location.pathname !== '/userdashboard/orders' &&
    location.pathname !== '/userdashboard/settings' &&
    location.pathname !== '/user/admin'

  return (
    <>
      <ToastContainer />
      <UtilityBar />
      {shouldRenderNavbar && <Navbar />}

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
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/verify/:id" element={<VerifyPage />} />
        <Route path="/userdashboard/profile" element={<ProfilePage />} />
        <Route path="/userdashboard/orders" element={<UserOrders />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <GoogleOAuthProvider clientId="274366002449-pj06cfpd1coate7loeprmqnfmkktev34.apps.googleusercontent.com">
      <ChakraProvider>
        <Router>
          <Main />
        </Router>
      </ChakraProvider>
    </GoogleOAuthProvider>
  )
}

export default App
