import React from 'react'
import './../styles/NavigationBar.css'

const NavigationBar = () => {
  return (
    <nav className='navbar'>
      <ul className='nav-links'>
        <li className='nav-item'><a href='#'>Portfolio</a></li>
        <li className='nav-item'><a href='#'>Profile</a></li>
      </ul>
    </nav>
  )
}

export default NavigationBar