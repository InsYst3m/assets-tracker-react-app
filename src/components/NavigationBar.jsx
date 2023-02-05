import React from 'react'
import './../styles/NavigationBar.css'

const NavigationBar = () => {

  const assetsClick = (event) => {
    event.preventDefault();
    console.log('assets click!');
  }

  const portfolioClick = (event) => {
    event.preventDefault();
    console.log('portfolio click');
  }

  return (
    <nav className='navbar'>
      <ul className='nav-links'>
        <li className='nav-item'><a onClick={(event) => assetsClick(event)} href='#'>Assets</a></li>
        <li className='nav-item'><a onClick={(event) => portfolioClick(event)} href='#'>Portfolio</a></li>
      </ul>
      <div className='nav-profile'>
        <a href='#'>Profile</a>
      </div>
    </nav>
  )
}

export default NavigationBar