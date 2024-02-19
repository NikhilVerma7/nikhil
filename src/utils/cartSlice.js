import { createSlice ,current } from "@reduxjs/toolkit";

const cartSlice =createSlice({

    name:'cart',
    initialState:{
        items:[],
        fre:{}
    },  
    reducers:{
        addItem:(state,action)=>{
           state.items.push(action.payload);
        },
        
        removeItem:(state,action)=>{

            let a = current(state.items);
            let b = a.indexOf(action.payload);
            state.items.splice(b, 1);
        },
     
        clearCart:(state)=>{
            state.items=[];
            state.fre={};
        },

        addsingle:(state,action)=>{
            if (state.fre[action.payload]) {
                state.fre[action.payload]++;
              } else {
                state.fre[action.payload] = 1;
              }
           
        },
        removesingle:(state,action)=>{
            state.fre[action.payload]==0 ?state.fre[action.payload]=0:state.fre[action.payload]--;
        },
    },
});

export const {addItem,removeItem,clearCart,addsingle,removesingle}= cartSlice.actions;
export default cartSlice.reducer;