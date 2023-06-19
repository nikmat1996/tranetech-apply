import React from 'react';
import logoUrl from '../assets/images/tranetechlogo.svg';
import '../assets/css/navbar.css'

const Navbar = () => {
  return (
      <nav className='navbar'>
        <div></div>
        <ul>
            <li><img src={logoUrl} alt="logo" /></li>
            <li>home</li>
            <li>about</li>
            <li>industries</li>
            <li>our products</li>
            <li>equal</li>
            <li>services</li>
            <li>blog</li>
            <li>careers</li>
            <li>contact</li>
        </ul>      
    </nav>
  )
}

export default Navbar