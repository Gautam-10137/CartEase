const mongoose=require('mongoose');

const OrderSchema=new mongoose.Schema({
    userId:{
      type:String,
      required:true
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'Product',
        required: true,
      }],
    shippingAddress: {
        fullName: {
          type: String,
          required: true,
        },
        addressLine1: {
          type: String,
          required: true,
        },
        addressLine2: String,
        city: {
          type: String,
          required: true,
        },
        state: {
          type: String,
          required: true,
        },
        postalCode: {
          type: String,
          required: true,
        },
        country: {
          type: String,
          required: true,
        },
      },
      // paymentDetails: {
      //   cardNumber: {
      //     type: String,
      //     required: true,
      //   },
      //   expirationDate: {
      //     type: String,
      //     required: true,
      //   },
      //   cvv: {
      //     type: String,
      //     required: true,
      //   },
      // },
      payment: {
        type: String,
        default: 'pending',
      },
      
})

module.exports=mongoose.model('Order',OrderSchema);