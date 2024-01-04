import React,{ useEffect, useState }  from 'react'
import ProductCard from './ProductCard';
import SearchBar from '../search/SearchBar';
const ProductList = () => {
   const [products,setProducts]=useState([]);
   const [filteredProducts,setFilteredProducts]=useState([]);
   const [currentPage,setCurrentPage]=useState(1);
   const [productsPerPage]=useState(10);
   const [searchTerm,setSearchTerm]=useState('');
  //  Fetching products from backend


   useEffect(()=>{
       console.log('search');
         const fetchData=async ()=>{
          try{
          const response=await fetch('http://127.0.0.1:7000/api/product/all');
          const data=await response.json();
          const filteredProduct=searchTerm!==''?data.filter((product)=>product.name.toLowerCase().includes(searchTerm.toLowerCase())):data;
         setProducts(filteredProduct);  
        // setProducts(data);
          }
          catch(error){
             console.error('Error Fetching products: '+ error);
          }
         }
     
       fetchData();
   },[searchTerm])
  


  const indexOfLastProduct=currentPage*productsPerPage;
  const indexOfFirstProduct=indexOfLastProduct-productsPerPage;
  const currentProducts=products.slice(indexOfFirstProduct,indexOfLastProduct);
 

  const handlePageChange=(pageNumber)=>{
    setCurrentPage(pageNumber);
  }
  const renderPaginationControls=()=>{
    const pageNumbers=Math.ceil(products.length/productsPerPage);

    return (
      <div className='pagination'> 
        {
         Array.from({ length: pageNumbers }).map((_, index) => index + 1).map((pageNumber) => (
           <span
            key={pageNumber}
            className={`page-number${currentPage === pageNumber ? 'active' : ''}`}
           onClick={() => handlePageChange(pageNumber)}
           >
           {pageNumber}
          </span>
         ))
        }
      </div>
    )
  }
  
 
  return (
    <div className='product-list-container'>
        <h2>Product Listing :</h2>
        <SearchBar setSearchTerm={setSearchTerm}/>
        <div className='product-list '>
           {
            currentProducts.map((product)=>(
              <ProductCard key={product._id} product={product} ></ProductCard>
            ))
           }  
        </div>   
        <div className='pagination'>{renderPaginationControls()}</div>
    </div>
  );
  
 }

export default ProductList;
