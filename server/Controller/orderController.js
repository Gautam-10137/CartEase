const OrderService=require('../services/OrderService');

const OrderController={
   createOrder:async (req,res)=>{
    try{
        console.log("Order")
        const {orderData}=req.body;
        console.log(orderData);
       const newOrder=await OrderService.createOrder(orderData);
       res.status(200).json(newOrder);
    }
    catch(error){
        res.status(500).json('Internal server error');
    }
   }
}

module.exports=OrderController;
