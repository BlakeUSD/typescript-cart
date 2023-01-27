import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <span>Intentionally left blank. Actual project content is at the <Link to="/store">Store</Link> route</span>
    </div>
  )
}

export default Home