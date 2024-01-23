import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { jwtDecode } from 'jwt-decode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const Header = ({isLoggedIn}) => {
  const [username,setUsername]=useState('');
    const [userId,setUserId]=useState('');
    useEffect(()=>{
       const token=localStorage.getItem('token');
       const getUserIdFromToken = (token) => {
        try {
          // Decode the token payload
          const decoded = jwtDecode(token);
          // Extract and return the userId
           setUsername(decoded.username);
           setUserId(decoded.id);
        } catch (error) {
          console.error('Error decoding token:', error);
          return null;
        }
      };  
      if(token){getUserIdFromToken(token)};
    },[]);
  return (
    <header>
        <nav  className="flex w-full bg-gray-200 justify-between h-10 ">
            <div className="font-bold text-2xl bg-white ml-2  mt-1 h-8">
              <Link to="/">CartEase</Link>
            </div>
            <div className='bg-white w-1/3'> 
             <ul className="flex justify-evenly  h-full rounded-sm   bg-red-100 text-xl  text-center">
             <li className=' bg-white rounded hover:shadow-md h-7  font-medium mt-1'><Link to='/'>About</Link></li>
             <li className='hover:shadow-md rounded bg-white h-7 mt-1 font-medium '><Link to='/'>Contact</Link></li>
             </ul>
             </div>
             <div className='flex space-x-8 mx-2'>
             <div className='bg-white border-2 border-red-100 w-10 text-lg h-8 mt-1 shadow-sm hover:shadow-md rounded'>
                <Link to="/cart"><button>Cart</button></Link>
             </div>
            <div className=" text-lg h-8 mt-1   ">
            {isLoggedIn?<div className='flex space-x-8 mx-4'>
                    <div >
                        Hii,{username}
                    </div> 
                    <div>
                    <Link to={`/profile`}><FontAwesomeIcon icon={faUser} style={{ fontSize: '2rem' }}/></Link>
                    </div>

                </div>:<div className='flex space-x-8 mx-2'>
                    <button className='border-2 border-red-100  bg-white'>
                        <Link to='/login' >Login</Link>
                    </button>
                        <button className='border-2 border-red-100 bg-white '>
                            <Link to='/register'><span id='sign'>Sign up</span></Link>
                        </button>      
                </div>}
            </div>
            </div>
        </nav>
    </header>
  )
}

export default Header
