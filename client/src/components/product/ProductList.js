import React,{ useEffect, useState }  from 'react'
import ProductCard from './ProductCard';
const ProductList = () => {
   const [products,setProducts]=useState([]);
   const [currentPage,setCurrentPage]=useState(1);
   const [productsPerPage]=useState(10);

  //  Fetching products from backend
   useEffect(()=>{
       try{
         const fetchData=async ()=>{
          const response=await fetch('http://127.0.0.1:7000/api/product/all');
          const data=await response.json();
          setProducts(data);
        }
      }
      catch(error){
        console.error('Error Fetching products: '+ error);
      }
      fetchData();
   },[])
  
  
  const indexOfLastProduct=currentPage*productsPerPage;
  const indexOfFirstProduct=indexOfLastProduct-productsPerPage;
  const currentProducts=products.slice(indexOfFirstProduct,indexOfLastProduct);

  const handlePageChange=(pageNumber)=>{
    setCurrentPage(pageNumber);
  }
  const renderPaginationControl=()=>{
    const pageNumbers=Math.ceil(products.length/productsPerPage);

    return (
      <div className='pagination'> 
        {
          Array.from({length:pageNumbers},((_,index)=>index+1).map((pageNumber)=>(
            <span
              key={pageNumber}
              className={`page-number ${currentPage==pageNumber?'active':''}`}
              onClick={()=>handlePageChange(pageNumber)}
            >
              {pageNumber}
            </span>
          )))
        }
      </div>
    )
  }
  
  const handleAddToCart=(productId)=>{
    console.log(`product with ID ${productId} added to cart`);
  }
  return (
    <div className='product-list-container'>
        <h2>Product Listing :</h2>
        <div className='product-list'>
           {
            currentProducts.map((product)=>(
              <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart}></ProductCard>
            ))
           }  
        </div>   
    </div>
);
  
}

export default ProductList
