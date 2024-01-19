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
      <div className=""> 
      <div className="bg-slate-200 w-1/2 mx-auto">{cartItems.map((item,index)=>(
        <div className=" " key={index}>
          <div className='flex'>
            <div>
             <img className='w-50 h-full' src={item.imageUrl} alt={item.name}></img>
             </div>
            <div className="text-center my-auto ">
             <h3 className="text-2xl font-bold p-2">{item.name}</h3>
             <h4 className='p-2'>Price: {item.price}</h4>
             <p className='p-2'>{item.description}</p>
             <p className='p-2 '><strong>quanitiy:</strong> 
             <button className='w-8 mx-2 bg-white rounded-md hover:bg-slate-50 hover: shadow-lg' onClick={(e)=>handleIncrement(item)}>+</button >
             {item.quantity}
             <button className='w-8 mx-2 bg-white rounded-md hover:bg-slate-50 hover: shadow-lg' onClick={()=>handleDecrement(item)}>-</button></p>
             
            </div>
          </div>
        </div>
        ))}
        </div>
        <div className='w-52 mx-auto mt-8 '>
       <button className='bg-slate-200 w-full h-8 rounded-md hover:shadow-lg' onClick={handleShippingClick}>Add Shipping Information</button>
       </div>
      </div>
      
    </div>
  )
}

export default OrderSummary
