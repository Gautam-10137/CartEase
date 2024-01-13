import {createSlice} from '@reduxjs/toolkit'

const cartSlice= createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addToCart: (state,action)=>{
            const {_id,name,price,description,imageUrl,user,operation}=action.payload;
            const existingItemIndex=state.items.findIndex(item=>item._id===_id);
            if(operation=='dec'){
                if(state.items[existingItemIndex].quantity==1){
                   state.items=state.items.filter((item)=>item._id!=_id);
                }
                else{
                    state.items[existingItemIndex].quantity-=1;
                }
            }
            else if(existingItemIndex!=-1 ){
                state.items[existingItemIndex].quantity+=1;
            }
            else{
                state.items.push({
                    _id,
                    name,
                    price,
                    description,
                    imageUrl,
                    user,
                    quantity:1,
                });

            }
            
            
        },
    },
});

export const {addToCart}=cartSlice.actions;

export default cartSlice.reducer;