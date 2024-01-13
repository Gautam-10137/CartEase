import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/CartSlice';
const Cart = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const cartItems=useSelector((state)=>state.cart.items || []);
  const handleCheckout=()=>{
    navigate('/checkout');
  }
  const handleGoToHome=()=>{
    navigate('/');
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
       
       {cartItems.length>0?
       <div>{cartItems.map((item,index)=>(
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
        ))}
        <button onClick={handleCheckout}>Proceed To Buy</button>
        </div>
        :<div>
          <strong>Cart is Empty!</strong>
          <button onClick={handleGoToHome}>Go To Home!</button>
          </div>}
      
     
        


        
    </div>
  )
}

export default Cart
