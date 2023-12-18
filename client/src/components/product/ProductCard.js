import React from 'react'


const ProductCard = ({product,onAddToCart}) => {
    const {id,name,price,image}=product;
  return (   
     <div className='product-card'>
      <img src={image} alt={name}  className='product-image'></img>
      <div className='product-info'>
      <h3 className='product-name'>{name} </h3>
      <p className='product-price'>Rs.{price}</p>
      <button onClick={()=>onAddToCart(id)} className='add-to-cart-button'>ADD To Cart</button>
      </div>
    </div>     
    
  )
}

export default ProductCard;
