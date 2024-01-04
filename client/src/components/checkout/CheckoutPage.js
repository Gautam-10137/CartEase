import React,{useState} from 'react'
import OrderSummary from './OrderSummary';
import ShippingInformation from './ShippingInformation';
import PaymentDetails from './PaymentDetails';
import OrderConfirmation from './OrderConfirmation';

const CheckoutPage = () => {
    const [currentStep,setCurrentStep]=useState(1);

    const handleNext=()=>{
        setCurrentStep(currentStep+1);
    }


    const handlePrevStep=()=>{
        setCurrentStep(currentStep-1);
    }

  return (
    <div>
      {currentStep==1 && <OrderSummary  onNextStep={handleNext}/>}
      {currentStep===2 && <ShippingInformation onNextStep={handleNext} onPrevStep={handlePrevStep}/>}
      {currentStep===3 && <PaymentDetails onNextStep={handleNext} onPrevStep={handlePrevStep}/>}
      {currentStep===4 && <OrderConfirmation/>}
    </div>
  )
}

export default CheckoutPage
