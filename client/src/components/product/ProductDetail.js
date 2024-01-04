import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../redux/CartSlice';
const ProductDetail = () => {
    const dispatch=useDispatch();
    const {productID}=useParams();
    const [product,setProduct]=useState({
        _id:'',
        name:'',
        price:0,
        description:'',
        imageUrl:'',
        user:''
   });
   let productImage = "";

   useEffect(()=>{
    const fetchProduct= async()=>{
        try{
            const response=await fetch(`http://127.0.0.1:7000/api/product/${productID}`,{
                method:'GET',
                headers:{
                    'Content-type':'application/json'
                }
            });
            const data=await response.json();
            setProduct(data);
           console.log(data);
           productImage = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D";

        }
        catch(error){
            console.log("Error fetching product data :"+error);
        }
    }
    fetchProduct();
   },[]);
   
   const handleAddToCart=()=>{

     dispatch(addToCart(product));
   }
  return (
    
    <div className='product-detail-container'>
        <div className='product-detail'>
        <img src={product.imageUrl} alt={product.name} ></img>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p><strong>Price: </strong>{product.price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductDetail
