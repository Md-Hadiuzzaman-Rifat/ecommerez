import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state,action) => {
        state.push(action.payload)
    },
    // handleClose: (state) => {
    //     state.cartCondition= false
    // },
    // handleToggle: (state) => {
    //     state.cartCondition= !state.cartCondition
    // },
    // // search condition 
    // searchOpen: (state) => {
    //     state.searchCondition= true
    // },
    // searchClose: (state) => {
    //     state.searchCondition= false
    // },
    // searchToggle: (state) => {
    //     state.searchCondition= !state.searchCondition
    // },
  },
})

// Action creators are generated for each case reducer function
export const { addProduct } = productSlice.actions

export default productSlice.reducer