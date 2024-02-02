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
        },
        removeOrder:(state,action)=>{
            delete state[action.payload.id]
        }
    }
})
export const {addToOrder, reduceOrder, removeOrder}= orderProductSlice.actions
export default orderProductSlice.reducer