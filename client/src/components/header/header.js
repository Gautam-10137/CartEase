import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <nav  className="flex w-full bg-gray-200 justify-between h-10">
            <div className="font-bold text-2xl bg-white ml-2 ">
              <Link to="/">CartEase</Link>
            </div>
            
             <ul className="flex justify-evenly w-2/6 bg-white text-xl">
             <li><Link to='/'>Home</Link></li>
             <li><Link to='/about'>About</Link></li>
             </ul>
            
            <div className="text-xl">
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
