import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/CartSlice';
const ProductCard = ({product}) => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {_id,name,price,imageUrl,description}=product;
    const handleClick=()=>{
      navigate(`/product/${_id}`);    
    }
    const handleButtonClick=(e)=>{
      e.stopPropagation();
      dispatch(addToCart(product));
    }
  return (   
     <div  className='' onClick={handleClick}>
      <div className='flex flex-col h-68 w-52 bg-gray-500 border-slate-500 border-1 shadow-md  overflow-hidden rounded-xl mt-3'>
      <div className='h-32  '>
      <img className='h-full w-2/3  rounded-lg m-auto' src={imageUrl} alt={name}  ></img>
      </div>
      <div className=' bg-white h-36 text-center mt-3 pt-2'>
      <h3 className='text-xl font-bold'>{name} </h3>
      <p className=''>Rs.{price}</p>
      <p className='text-sm max-h-9 overflow-hidden'>{description}</p>
      {/* <button onClick={(e)=>handleButtonClick(e)} className='add-to-cart-button'>ADD To Cart</button> */}
      </div>
      </div>
    </div>     
    
  )
}

export default ProductCard;
