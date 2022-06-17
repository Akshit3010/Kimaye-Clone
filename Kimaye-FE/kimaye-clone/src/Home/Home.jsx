import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to='grow'><h1>Grow</h1></Link>
      <Link to='productdetails'><h1>Product Details</h1></Link>
    </div>
  )
}

export default Home
