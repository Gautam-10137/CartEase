import React from 'react'
import Header from '../header/header'
import AddProduct from '../product/AddProduct'
import ProductList from '../product/ProductList'
import Cart from '../cart/Cart'
import OrderSummary from '../checkout/OrderSummary'
import PaymentDetails from '../checkout/PaymentDetails'
import Category from '../category/Category'


const Home = () => {
  return (
    <div>
      <Header/>
       <Cart/>
       <Category/>
      <ProductList/>  
      <AddProduct/>
      
      
     
    
    </div>
  )
}

export default Home
