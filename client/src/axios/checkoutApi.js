import axios from 'axios'

export const createOrder=(orderData)=>{
    axios.post('/order',orderData);
}