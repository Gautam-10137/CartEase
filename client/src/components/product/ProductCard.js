import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product,onAddToCart}) => {
    const navigate=useNavigate();
    const {_id,name,price,image}=product;
    const handleClick=()=>{
      navigate(`/product/${_id}`);    
    }
  return (   
     <div className='product-card' onClick={handleClick}>
      <img src={image} alt={name}  className='product-image'></img>
      <div className='product-info'>
      <h3 className='product-name'>{name} </h3>
      <p className='product-price'>Rs.{price}</p>
      <button onClick={()=>onAddToCart(_id)} className='add-to-cart-button'>ADD To Cart</button>
      </div>
    </div>     
    
  )
}

export default ProductCard;
