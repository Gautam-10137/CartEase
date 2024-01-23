import React, { useState ,useEffect} from 'react'
import {jwtDecode} from 'jwt-decode';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserProfile = () => {

  const [user,setUser]=useState({
    username:'',
    email:''
  });
  const [orders,setOrders]=useState([]);

  useEffect(()=>{
    
    const token=localStorage.getItem('token');

    const getUserIdFromToken=(token)=>{
      try{ 
      const decode=jwtDecode(token);
      return decode.id;
      }
      catch(error){
        console.error('Error decoding token:'+error);
        return null;
      }
    }
    const fetchUser= async()=>{
      const userId=getUserIdFromToken(token);
      
      const response=await axios.get(`http://127.0.0.1:7000/api/user/${userId}`,{
        headers:{
          'Content-type':'application/json',
          'Authorization':`${token}`
        }
      });
      setUser(response.data);   
    }

    const fetchOrders= async()=>{
      const userId=getUserIdFromToken(token);
      const response=await axios.get(`http://127.0.0.1:7000/api/orders/${userId}`,{
        headers:{
          'Content-type':'application/json',
          'Authorization':`${token}`
        }
      });
      setOrders(response.data);
      
    }
    fetchUser();
    fetchOrders();
    
  },[])

  return (
    <div>
      <div className='bg-slate-200 h-10 text-center text-2xl font-semibold'> 
      <Link to="/">CartEase</Link></div>
      <div className='border-4 border-slate-300 w-1/2 mx-auto my-10 ' >
      <div className='text-center'><p><strong>username: </strong>{user.username}</p></div>
      <div className='text-center'><p><strong>email:  </strong>{user.email}</p></div>
      <div className=''>
      <div className='text-xl  font-medium'>  
        <p className=' ml-4'> Order history :</p>
        </div>
        <div className='text-center  '>
            {
              orders.length>0?orders.map((order,index)=>(
                <div key={index}>
                {order.items.map((item)=>(
                  <div key={item._id}>
                    <p>item: {item.name}  & price :{item.price}</p>
                  </div>
                ))}
                </div>
              )):'No Order Placed'
            }
      </div>
      </div>
      </div>
    </div>
  )
}

export default UserProfile
