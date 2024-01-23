import { configureStore } from '@reduxjs/toolkit'
import {apiSlice} from "../features/api/apiSlice"
import {productApi} from "../features/product/productApi"
import {usersApi} from "../features/users/userApi"
import counterReducer from '../features/counter/counterReducer'
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    productApi,
    usersApi,
    counter:counterReducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)
})

