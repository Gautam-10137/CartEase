import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const OrderSummary = ({ onNextStep,updateOrderItems}) => {
  const cartItems=useSelector((state)=>state.cart.items||[]);

  const navigate=useNavigate();
  const handleShippingClick=()=>{  
    // Navigate to the next step
    updateOrderItems(cartItems);
    onNextStep();
    
  }
  return (
    <div>
      order summary
      <div id="order-summary"> 
        {cartItems.length>0?cartItems.map((item,index)=>(
        <div className='summary-item' key={index}>
             <img src={item.imageUrl} alt={item.name}></img>
             <div>
             <h3>{item.name}</h3>
             <h4>{item.price}</h4>
             <p>{item.description}</p>
             <p><strong>quanitiy:</strong> {item.quantity}</p>
             </div>
        </div>
        )):''}
       <button onClick={handleShippingClick}>Add Shipping Information</button>
      </div>
      
    </div>
  )
}

export default OrderSummary
