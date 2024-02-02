
import {apiSlice} from "../api/apiSlice"

export const confirmOrder= apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        order:builder.mutation({
            query:(data)=>({
                url:"/confirmOrder",
                method:"post",
                body:data
            }),
        })
    })
})
export const {useOrderMutation}=confirmOrder
;

