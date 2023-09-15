import React from 'react'

import '../styles/NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>
        <h1 className='title'>404</h1>
        <h2 className='subtitle'>Page not found</h2>
        <p className='text'>Sorry, can't find the page you are loking for <span className='link'>click here</span> do tome back to home page</p>
        <Link to={`/`} className='btn'>Back</Link>
    </div>
  )
}

export default NotFound