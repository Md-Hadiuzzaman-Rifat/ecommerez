
import {apiSlice} from "../api/apiSlice"

export const confirmOrder= apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        order:builder.mutation({
            query:(data)=>({
                url:"/confirmOrder",
                method:"post",
                body:data
            }),
        }),
        getSingleOrder:builder.query({
            query:(data)=>({
                 url:`/singleOrder/${data}`
            })
        }),
        getAllOrdered:builder.query({
            query:(data)=>({
                url:'/orderedProduct'
            })
        })
    })
})
export const {useOrderMutation, useGetSingleOrderQuery, useGetAllOrderedQuery}=confirmOrder
;

