import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/home/Home.jsx'
import NotFoundPage from './components/pages/notfoundpage/NotFoundPage.jsx'
import Navbar from './components/Navbar.js'
import UtilityBar from './components/pages/home/component/UtilityBar.jsx'

function App() {
  return (
    <Router>
      <UtilityBar />
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
