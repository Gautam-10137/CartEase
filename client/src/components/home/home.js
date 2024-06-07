import React, { useEffect } from 'react'
import Header from '../header/header'
import AddProduct from '../product/AddProduct'
import ProductList from '../product/ProductList'
import Cart from '../cart/Cart'
import OrderSummary from '../checkout/OrderSummary'
import PaymentDetails from '../checkout/PaymentDetails'
import Category from '../category/Category'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../../redux/productSlice'

const Home = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
   dispatch(fetchProducts());
  },[]);
  return (
    <div>
      <Header />
     
      <ProductList/>  
      
      
      
      
     
    
    </div>
  )
}

export default Home
