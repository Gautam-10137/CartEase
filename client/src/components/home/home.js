import React from 'react'
import Header from '../header/header'
import AddProduct from '../product/AddProduct'
import ProductList from '../product/ProductList'

const Home = () => {
  return (
    <div>
      <Header/>
      {/* <AddProduct/> */}
      <ProductList/>
    </div>
  )
}

export default Home
