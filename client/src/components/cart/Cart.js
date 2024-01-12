import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
const Cart = () => {
  const navigate=useNavigate();
  const cartItems=useSelector((state)=>state.cart.items || []);
  const handleCheckout=()=>{
    navigate('/checkout');
  }
  return (
    <div>
       {cartItems.map((item,index)=>(
           <div key={index}>
               {item.name}
           </div>
       ))}
       <button onClick={handleCheckout}>Cart</button>
    </div>
  )
}

export default Cart
