import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const ShippingInformation = ({onNextStep,onPrevStep,updateShippingAddress}) => {
  const navigate=useNavigate();
  const [shippingAddress,setShippingAddress]=useState({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  })

  const handleInputChange=(e)=>{
       const {name,value}=e.target;
       setShippingAddress({
        ...shippingAddress,
        [name]:value
       });
  }

  const handleOrderSummary=()=>{
    onPrevStep();
    navigate('/checkout');
  }
  const handleConfirmOrder=(e)=>{
    e.preventDefault();
    updateShippingAddress(shippingAddress);
    onNextStep();
    // navigate('/checkout');
  }
  return (
   <div className='shipping'>
      <h1>Shipping Information</h1>
    <form 
      // onSubmit={(e)=>{handlePaymentDetails(e)}}
      >
      <div className='mb-4'>
        <label className='block text-gray-500 text-lg'>FullName:</label>
        <input
          name='fullName'
          type='text'
          value={shippingAddress.fullName}
          onChange={(e)=>handleInputChange(e)}
          className='w-full border  rounded-md p-2 mt-1 '
          required
        ></input>
      </div>
      <div className='mb-4'>
        <label className='block text-gray-500 text-lg'>AddressLine1:</label>
        <input
          name='addressLine1'
          type='text'
          value={shippingAddress.addressLine1}
          onChange={(e)=>handleInputChange(e)}
          className='w-full border  rounded-md p-2 mt-1 '
          required
        ></input>
      </div>
      <div className='mb-4'>
        <label className='block text-gray-500 text-lg'>AddressLine2:</label>
        <input
          name='addressLine2'
          type='text'
          value={shippingAddress.addressLine2}
          onChange={(e)=>handleInputChange(e)}
          className='w-full border  rounded-md p-2 mt-1 '
          required
        ></input>
      </div>
      <div className='mb-4'>
        <label className='block text-gray-500 text-lg'>City:</label>
        <input
          name='city'
          type='text'
          value={shippingAddress.city}
          onChange={(e)=>handleInputChange(e)}
          className='w-full border  rounded-md p-2 mt-1 '
          required
        ></input>
      </div>
      <div className='mb-4'>
        <label className='block text-gray-500 text-lg'>State:</label>
        <input
          name='state'
          type='text'
          value={shippingAddress.state}
          onChange={(e)=>handleInputChange(e)}
          className='w-full border  rounded-md p-2 mt-1 '
          required
        ></input>
      </div>
      <div className='mb-4'>
        <label className='block text-gray-500 text-lg'>Postal-Code:</label>
        <input
          name='postalCode'
          type='text'
          value={shippingAddress.postalCode}
          onChange={(e)=>handleInputChange(e)}
          className='w-full border  rounded-md p-2 mt-1 '
          required
        ></input>
      </div>
      <div className='mb-4'>
        <label className='block text-gray-500 text-lg'>Country:</label>
        <input
          name='country'
          type='text'
          value={shippingAddress.country}
          onChange={(e)=>handleInputChange(e)}
          className='w-full border  rounded-md p-2 mt-1 '
          required
        ></input>
      </div>
      <div>
        <button className='w-40 rounded-md bg-slate-200 mx-2' onClick={handleOrderSummary}>{"<- Order Summary"}</button>
        <button className='w-40 rounded-md bg-slate-200 mx-2' type="submit" onClick={handleConfirmOrder}>{"Confirm Order ->"}</button>
      </div>
      </form >
      
    </div>
  )
}

export default ShippingInformation
