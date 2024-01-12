import React from 'react'
import { useSearchParams ,useNavigate} from 'react-router-dom'
const PaymentSuccess = () => {
  const searchQuery=useSearchParams()[0];
  const referenceNum=searchQuery.get('reference');
  const navigate=useNavigate();

  const handleClick=()=>{
    navigate('/');
  }
  return (
    <div>
      <h2>Order Placed Successfully.</h2>
      <p><strong>Reference No. </strong>{referenceNum}</p>
      <button onClick={handleClick}>Go to Home page</button>
    </div>
  )
}

export default PaymentSuccess
