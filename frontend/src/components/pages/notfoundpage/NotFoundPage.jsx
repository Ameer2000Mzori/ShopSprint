import React from 'react'
import { Link } from 'react-router-dom'
const NotFoundPage = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>the page you looking for is not available</p>
      <Link to="/home">return to home page ? </Link>
    </div>
  )
}

export default NotFoundPage
