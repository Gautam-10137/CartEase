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
    <div >
      <div className='w-1/2 bg-slate-100 mx-auto my-10 text-center  '>
        <div>
      <h2>Order Placed <strong>Successfully.</strong></h2>
      <p><strong>Reference No. = </strong>{referenceNum}</p>
      </div>
      <button className='bg-white rounded-md my-5  shadow-sm hover:shadow-md' onClick={handleClick}>Go to Home page</button>
      </div>
    </div>
  )
}

export default PaymentSuccess
