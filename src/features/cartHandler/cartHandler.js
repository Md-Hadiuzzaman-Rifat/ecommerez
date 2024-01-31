import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  handleCart:false
}

export const cartHandler = createSlice({
  name: 'cartHandler',
  initialState,
  reducers: {
    handleOpen: (state) => {
        state.handleCart= true
    },
    handleClose: (state) => {
        state.handleCart= false
    },
    handleToggle: (state) => {
        state.handleCart= !state.handleCart
    },
  },
})

// Action creators are generated for each case reducer function
export const { handleClose, handleOpen, handleToggle } = cartHandler.actions

export default cartHandler.reducer