import { createSlice } from "@reduxjs/toolkit";

const initialState={}

const orderProductSlice= createSlice({
    name:'orderProduct',
    initialState,
    reducers:{
        addToOrder:(state,action)=>{
            state[action.payload.id]= action.payload.count
        },
        reduceOrder:(state,action)=>{
            state[action.payload.id]= action.payload.count
        }
    }
})
export const {addToOrder, reduceOrder}= orderProductSlice.actions
export default orderProductSlice.reducer