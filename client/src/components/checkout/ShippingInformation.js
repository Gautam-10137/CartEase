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
  const handlePaymentDetails=(e)=>{
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
        <label>FullName:</label>
        <input
          name='fullName'
          type='text'
          value={shippingAddress.fullName}
          onChange={(e)=>handleInputChange(e)}
          required
        ></input><br></br>
        <label>AddressLine1:</label>
        <input
          name='addressLine1'
          type='text'
          value={shippingAddress.addressLine1}
          onChange={(e)=>handleInputChange(e)}
          required
        ></input><br></br>
        <label>AddressLine2:</label>
        <input
          name='addressLine2'
          type='text'
          value={shippingAddress.addressLine2}
          onChange={(e)=>handleInputChange(e)}
          required
        ></input><br></br>
        <label>City:</label>
        <input
          name='city'
          type='text'
          value={shippingAddress.city}
          onChange={(e)=>handleInputChange(e)}
          required
        ></input><br></br>
        <label>State:</label>
        <input
          name='state'
          type='text'
          value={shippingAddress.state}
          onChange={(e)=>handleInputChange(e)}
          required
        ></input><br></br>
        <label>Postal-Code:</label>
        <input
          name='postalCode'
          type='text'
          value={shippingAddress.postalCode}
          onChange={(e)=>handleInputChange(e)}
          required
        ></input><br></br>
        <label>Country:</label>
        <input
          name='country'
          type='text'
          value={shippingAddress.country}
          onChange={(e)=>handleInputChange(e)}
          required
        ></input><br></br>

      <div>
        <button onClick={handleOrderSummary}>{"<- Order Summary"}</button>
        <button type="submit" onClick={handlePaymentDetails}>{"Payment Details ->"}</button>
      </div>
      </form >
      
    </div>
  )
}

export default ShippingInformation
