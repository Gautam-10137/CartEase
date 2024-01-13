import React, { useDeferredValue } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/CartSlice';
const OrderSummary = ({ onNextStep,updateOrderItems}) => {
  const cartItems=useSelector((state)=>state.cart.items||[]);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleShippingClick=()=>{  
    // Navigate to the next step
    updateOrderItems(cartItems);
    onNextStep();
    
  }
  const handleIncrement=(item)=>{
     dispatch(addToCart(item));
  }
  const handleDecrement=(item)=>{
    const decrementedItem={...item,operation:'dec'};
       dispatch(addToCart(decrementedItem));
  }
  return (
    <div>
      order summary
      <div className="order-summary"> 
        {cartItems.length>0?cartItems.map((item,index)=>(
        <div className='summary-item' key={index}>
             <img src={item.imageUrl} alt={item.name}></img>
             <div>
             <h3>{item.name}</h3>
             <h4>{item.price}</h4>
             <p>{item.description}</p>
             <p><strong>quanitiy:</strong> 
             <button onClick={(e)=>handleIncrement(item)}>+</button >
             {item.quantity}
             <button onClick={()=>handleDecrement(item)}>-</button></p>
             </div>
        </div>
        )):''}
       <button onClick={handleShippingClick}>Add Shipping Information</button>
      </div>
      
    </div>
  )
}

export default OrderSummary
