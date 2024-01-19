import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <nav  className="flex w-full bg-gray-200 justify-between h-10 ">
            <div className="font-bold text-2xl bg-white ml-2  mt-1 h-8">
              <Link to="/">CartEase</Link>
            </div>
            <div className='bg-white w-1/3'> 
             <ul className="flex justify-evenly  h-full rounded-sm   bg-red-100 text-xl  text-center">
             <li className=' bg-white rounded hover:shadow-md h-7  font-medium mt-1'><Link to='/'>Home</Link></li>
             <li className='hover:shadow-md rounded bg-white h-7 mt-1 font-medium '><Link to='/about'>About</Link></li>
             </ul>
             </div>
             <div className='flex space-x-8 mx-2'>
             <div className='bg-white w-10 text-lg h-8 mt-1 shadow-sm hover:shadow-md rounded'>
                <Link to="/cart"><button>Cart</button></Link>
             </div>
            <div className="bg-white text-lg h-8 mt-1  shadow-sm hover:shadow-md rounded ">
                   {/* <span>Hello , Gautam</span> */}
                   {/* <Link to='/login'>Login</Link> */}
                   <Link to='/register'>Register</Link>
                   {/* <Link to='/profile'>Profile</Link> */}
            </div>
            </div>
        </nav>
    </header>
  )
}

export default Header
