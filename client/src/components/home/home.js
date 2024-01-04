import React from 'react'
import Header from '../header/header'
import AddProduct from '../product/AddProduct'
import ProductList from '../product/ProductList'
import Cart from '../cart/Cart'
import OrderSummary from '../checkout/OrderSummary'

const Home = () => {
  return (
    <div>
      <Header/>
      {/* <AddProduct/> */}
      <ProductList/>  
      <Cart/>
      
    </div>
  )
}

export default Home
