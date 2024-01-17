import React from 'react'
import Header from '../header/header'
import AddProduct from '../product/AddProduct'
import ProductList from '../product/ProductList'
import Cart from '../cart/Cart'
import OrderSummary from '../checkout/OrderSummary'
import PaymentDetails from '../checkout/PaymentDetails'
import Category from '../category/Category'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <Header/>
      <div className='flex justify-end'>
       <Link to="/cart"><button>Cart</button></Link>
       </div>
       {/* <Link to="/addProduct"><button>Add Product</button></Link> */}
       {/* <Category/> */}
      <ProductList/>  
      
      
      
      
     
    
    </div>
  )
}

export default Home
