import { configureStore } from '@reduxjs/toolkit'
import {apiSlice} from "../features/api/apiSlice"
import {productApi} from "../features/product/productApi"
import {usersApi} from "../features/users/userApi"
import orderProductSlice from '../features/orderProduct/orderProductSlice'
import cartHandler from '../features/cartHandler/cartHandler'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    productApi,
    usersApi,
    order:orderProductSlice,
    cartHandler
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)
})
