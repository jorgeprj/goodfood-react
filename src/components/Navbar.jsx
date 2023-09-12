import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar container'>
        <a href="#!" className='logo'>
          <img src="./src/assets/icon.png" alt="logo" />
          <div>Good<span>Food</span></div>
        </a>
        <div className='nav-links'>
            <a href="#!">Home</a>
            <a href="#!">Recipes</a>
            <a href="#!">Settings</a>
        </div>
    </div>
  )
}

export default Navbar