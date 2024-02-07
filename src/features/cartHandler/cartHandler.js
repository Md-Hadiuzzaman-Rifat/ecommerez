import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartCondition:false,
  searchCondition:false,
  modalCondition:false
}

export const cartHandler = createSlice({
  name: 'cartHandler',
  initialState,
  reducers: {
    handleOpen: (state) => {
        state.cartCondition= true
    },
    handleClose: (state) => {
        state.cartCondition= false
    },
    handleToggle: (state) => {
        state.cartCondition= !state.cartCondition
    },
    // search condition 
    searchOpen: (state) => {
        state.searchCondition= true
    },
    searchClose: (state) => {
        state.searchCondition= false
    },
    searchToggle: (state) => {
        state.searchCondition= !state.searchCondition
    },
    // modal condition 
    modalOpen: (state) => {
        state.modalCondition= true
    },
    modalClose: (state) => {
        state.modalCondition= false
    },
    modalToggle: (state) => {
        state.modalCondition= !state.modalCondition
    },
  },
})

// Action creators are generated for each case reducer function
export const { handleClose, handleOpen, handleToggle, searchOpen, searchClose, searchToggle, modalClose, modalOpen, modalToggle } = cartHandler.actions

export default cartHandler.reducer