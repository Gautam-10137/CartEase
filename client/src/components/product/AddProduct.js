import React,{useState} from 'react'

const AddProduct = () => {
    const [product,setProduct]=useState({
         name:'',
         price:0,
         description:'',
         imageUrl:'',
         user:'6593677dc1245f646925b71e'
    });

    const handleInputChange=(e)=>{
          const {name,value}=e.target;
          setProduct({
            ...product,
            [name]:value,
          });

    };

    const handleFormSubmit=async (e)=>{
        e.preventDefault();
       try{
        const response=await fetch('http://127.0.0.1:7000/api/product/add',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(product)
        })
        if(response.ok){
            const data=await response.json();
            console.log(data);
        }
        else{
            console.log('Error adding product');
        }
       }
       catch(error){
        console.error("Error :"+error);
       }
    }
  return (
    <div>
        <form onSubmit={(e)=>{handleFormSubmit(e)}}>
            <label>Name:</label>
            <input
              type="text"
              name='name'
              value={product.name}
              onChange={(e)=>{handleInputChange(e)}}
            ></input>
            <label>Price:</label>
            <input 
            type='number'
            name='price'
            value={product.price}
            onChange={(e)=>{handleInputChange(e)}}
            ></input>
            <label>Description:</label>
            <textarea rows="2" cols="10"
              type='text'
              name='description'
              value={product.description}
              onChange={(e)=>{handleInputChange(e)}}
            ></textarea>
            <label>ImageUrl</label>
            <input
              type='text'
              name='imageUrl'
              value={product.imageUrl}
              onChange={(e)=>{handleInputChange(e)}}
            ></input>
               <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default AddProduct
