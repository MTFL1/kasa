import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'
import "./header.scss"

function Header() {
  return (
    <header className="header">
        <Link to="/" className="header__logo"><img src={Logo} alt="Kasa logo"/></Link>
      <div className="divLink active">      
        <Link to="/" className="nav_link">Accueil</Link>
        <Link to="/about" className="nav_link">A propos</Link>
      </div>
    </header>
  )
}

export default Header