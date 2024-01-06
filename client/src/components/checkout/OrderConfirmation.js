import React,{useState} from 'react'

const OrderConfirmation = ({orderData}) => {
   const [items,setItems]=useState(orderData.items);
   const [shippingAddress,setShippingInfo]=useState(orderData.shippingAddress);
   const [paymentDetails,setPaymentDetails]=useState(orderData.paymentDetails);
   console.log("orderData",orderData);
  return (
    <div>
      Order Confirmation:
       
      <div className="order-summary"> 
      Order summary:
        {items.length>0?items.map((item,index)=>(
        <div className='summary-item' key={index}>
             <img src={item.imageUrl} alt={item.name}></img>
             <div>
             <h3>{item.name}</h3>
             <h4>{item.price}</h4>
             <p>{item.description}</p>
             <p><strong>quanitiy:</strong> {item.quantity}</p>
             </div>
        </div>
        )):'hello'}
      </div>

      <div className='shipping-info'>
        Shipping Information:
        <div>
        <p><strong>Fullname:</strong> {shippingAddress.fullName}</p>
        <p><strong>Address Line 1:</strong> {shippingAddress.addressLine1}</p>
        <p><strong>Address Line 2:</strong> {shippingAddress.addressLine2}</p>
        <p><strong>City:</strong> {shippingAddress.city}</p>
        <p><strong>State:</strong> {shippingAddress.state}</p>
        <p><strong>PostalCode:</strong> {shippingAddress.postalCode}</p>
        <p><strong>Country:</strong> {shippingAddress.country}</p>

        </div>
      </div>

      <div className='payment-info'>
        Payment Details:
        <p><strong>Fullname:</strong> {paymentDetails.fullname}</p>
        <p><strong>CardNumber:</strong> {paymentDetails.cardNumber}</p>
        <p><strong>Expiration Date:</strong> {paymentDetails.expirationDate}</p>
        <p><strong>CVV:</strong> {paymentDetails.cvv}</p>
        
      </div>
      <button>Confirm Order</button>
      
    </div>
  )
}

export default OrderConfirmation
