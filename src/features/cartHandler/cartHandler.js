import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  condition:false
}

export const cartHandler = createSlice({
  name: 'cartHandler',
  initialState,
  reducers: {
    handleOpen: (state) => {
        state.condition= true
    },
    handleClose: (state) => {
        state.condition= false
    },
    handleToggle: (state) => {
        state.condition= !state.condition
    },
  },
})

// Action creators are generated for each case reducer function
export const { handleClose, handleOpen, handleToggle } = cartHandler.actions

export default cartHandler.reducer