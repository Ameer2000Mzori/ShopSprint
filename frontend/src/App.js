import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/pages/navbar/Navbar.jsx'
import NotFoundPage from './components/pages/notfoundpage/NotFoundPage.jsx'
import Home from './components/pages/home/Home.jsx'
import About from './components/pages/about/About.jsx'
import Products from './components/pages/products/Products.jsx'
import Cart from './components/pages/cart/Cart.jsx'
import UtilityBar from './components/pages/navbar/component/UtilityBar.jsx'
import SelectedProduct from './components/pages/selectedproduct/SelectedProduct.jsx'
import LoginPage from './components/pages/login/LoginPage.jsx'
import Register from './components/pages/register/Register.jsx'
import ProfilePage from './components/pages/profilePage/ProfilePage.jsx'

function App() {
  return (
    <Router>
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  )
}

export default App
