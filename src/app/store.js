import { configureStore } from '@reduxjs/toolkit'
import {apiSlice} from "../features/api/apiSlice"
import {productApi} from "../features/product/productApi"
import {usersApi} from "../features/users/userApi"

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    productApi,
    usersApi
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)
})

