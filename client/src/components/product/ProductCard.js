import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/CartSlice';
const ProductCard = ({product}) => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {_id,name,price,image}=product;
    const handleClick=()=>{
      navigate(`/product/${_id}`);    
    }
    const handleButtonClick=(e)=>{
      e.stopPropagation();
      dispatch(addToCart(product));
    }
  return (   
     <div  className='product-card' onClick={handleClick}>
      <img src={image} alt={name}  className='product-image'></img>
      <div className='product-info'>
      <h3 className='product-name'>{name} </h3>
      <p className='product-price'>Rs.{price}</p>
      {/* <button onClick={(e)=>handleButtonClick(e)} className='add-to-cart-button'>ADD To Cart</button> */}
      </div>
    </div>     
    
  )
}

export default ProductCard;
