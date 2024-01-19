import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import orderReducer from './orderSlice'
const store= configureStore({
    reducer:{
        cart:cartReducer,
        order:orderReducer,
        
        // other reducers
    },
});

export default store;
