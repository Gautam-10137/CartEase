import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <nav  className='header'>
            <div className='logo'>
              <Link to="/">CartEase</Link>
            </div>
            <div className='nav-links'>
             <ul>
             <li><Link to='/'>Home</Link></li>
             <li><Link to='/about'>About</Link></li>
             </ul>
            </div>
            <div className='profile-section'>
                   <span>Hello , Gautam</span>
                   <Link to='/api/auth/login'>
                    Login</Link>
            </div>
        </nav>
    </header>
  )
}

export default Header
