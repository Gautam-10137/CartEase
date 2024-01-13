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
                   <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                    <Link to='/profile'>Profile</Link>
            </div>
            
        </nav>
    </header>
  )
}

export default Header
