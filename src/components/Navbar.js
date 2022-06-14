import React from 'react'
import './NavCss.css'
import logo from '../assets/logo.png'
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <img src={logo}></img>
  
  <div className="" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link navbar-brand" href="#">Burger Builder</a>
      </li>
      <li className="nav-item active">
        <a className=" navbar-brand" href="#">Login</a>
      </li>
      
      
    </ul>
    
  </div>
</nav>
    </div>
  )
}
