import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
const OrderConfirmation = ({orderData}) => {
   const [items,setItems]=useState(orderData.items);
   const [shippingAddress,setShippingInfo]=useState(orderData.shippingAddress);
  //  const [paymentDetails,setPaymentDetails]=useState(orderData.paymentDetails);
  const [amount,setAmount]=useState(0);
  const [newOrderId,setNewOrderId]=useState('');
 
  
   useEffect(()=>{
    let totalAmount=0;
    for(let item of orderData.items){
       totalAmount+=item.price;   
    }
    setAmount(totalAmount);

    const token=localStorage.getItem('token');

    const getUserIdFromToken=(token)=>{
      try{ 
      const decode=jwtDecode(token);
      return decode.id;
      }
      catch(error){
        console.error('Error decoding token:'+error);
        return null;
      }
    }
    orderData.userId=getUserIdFromToken(token);
    console.log("orderData "+orderData);
    const createOrder=async ()=>{
      const response=await axios.post('http://127.0.0.1:7000/api/order/create-order',{orderData},{
            headers:{
              'Content-type':'application/json'
            }
          });
          // const newOrder=await response.json();
          
          setNewOrderId(response.data._id);
    }
    createOrder();
   },[]);
   
   const handleConfirmOrder=async()=>{
    try{
 
        
          const {data:{order}}=await axios.post('http://127.0.0.1:7000/api/payment/create-order',{amount,newOrderId},{
            headers:{
              'Content-type':'application/json'
            }
          })
          const {data:{key}}=await axios.get('http://127.0.0.1:7000/api/get-key');
          console.log(key);
          
          const options={
            key: key, // Enter the Key ID generated from the Dashboard
            amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "CartEase", //your business name
            description: "Test Transaction",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVOCFPRI7w3dKX-GSwBL5-KVJqEGn0P4Pc6w&usqp=CAU",
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: `http://127.0.0.1:7000/api/payment-success`,
            prefill: { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                name: "Gautam Pahwa", //your customer's name
                email: "gautampahwa47@gmail.com",
                contact: "8689014713" //Provide the customer's phone number for better conversion rates 
            },
            notes: {
                address: "Razorpay Corporate Office",
               
            },
             theme: {
            color: "#3399cc"
            }
          }
        const razor=new window.Razorpay(options);
        razor.open();
          
        
          
    }
    catch(error){
         console.log(error);
    }
   }

   console.log("orderData",orderData);
  return (
    <div>
      Order Confirmation:
       
      <div className=""> 
      Order summary:
        {items.length>0?
        items.map((item,index)=>(
        <div className='' key={index}>
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

      <div className='checkout'>
        <p><strong>Total Amount: </strong>{amount}</p>
        <button onClick={handleConfirmOrder}>Checkout</button>
      </div>
      
      
    </div>
  )
}

export default OrderConfirmation
