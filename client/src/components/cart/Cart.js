import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
const Cart = () => {

  const cartItems=useSelector((state)=>state.cart.items || []);
  return (
    <div>
       {cartItems.map((item,index)=>(
           <div key={index}>
               {item.name}
           </div>
       ))}
    </div>
  )
}

export default Cart
