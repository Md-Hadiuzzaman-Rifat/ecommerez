import { configureStore } from '@reduxjs/toolkit'
import {apiSlice} from "../features/api/apiSlice"
import {productApi} from "../features/product/productApi"

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    productApi
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)
})

