import React, { useState } from 'react';

const PaymentDetails = ({ onNextStep, onPrevStep ,updatePaymentDetails}) => {
  const [paymentDetails,setPaymentDetails]=useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  })
 

  const handleNext = () => {
    updatePaymentDetails(paymentDetails);
    onNextStep();
  };

  const handlePrev = () => {
    
    onPrevStep();
  };

  const handleInputChange=(e)=>{
      const{name,value}=e.target;
      setPaymentDetails({
        ...paymentDetails,
        [name]:value
      })
  }

  return (
    <div>
      <h2>Payment Details</h2>
      <form>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          name='cardNumber'
          id="cardNumber"
          value={paymentDetails.cardNumber}
          onChange={(e) => handleInputChange(e)}
        />

        <label htmlFor="expirationDate">Expiration Date:</label>
        <input
          type="text"
          name='expirationDate'
          id="expirationDate"
          value={paymentDetails.expirationDate}
          onChange={(e) => handleInputChange(e)}
        />

        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          name='cvv'
          id="cvv"
          value={paymentDetails.cvv}
          onChange={(e) => handleInputChange(e)}
        />

        <div>
          <button type="button" onClick={handlePrev}>
            Previous
          </button>
          <button type="button" onClick={handleNext}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentDetails;
