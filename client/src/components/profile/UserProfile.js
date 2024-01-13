import React, { useState ,useEffect} from 'react'
import {jwtDecode} from 'jwt-decode';
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
      <p><strong>username:</strong>{user.username}</p>
      <p><strong>email:</strong>{user.email}</p>
      <div>
        <strong>Order history:</strong>
            {
              orders.length>0?orders.map((order,index)=>(
                <div key={index}>
                {order.items.map((item)=>(
                  <div key={item._id}>
                    <p>item: {item.name}  & price{item.price}</p>
                  </div>
                ))}
                </div>
              )):'No Order Placed'
            }
      </div>
    </div>
  )
}

export default UserProfile
