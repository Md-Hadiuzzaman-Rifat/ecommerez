
import {apiSlice} from "../api/apiSlice"

export const confirmOrder= apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        purchaseOrder:builder.mutation({
            query:(data)=>({
                url:"/confirmOrder",
                method:"POST",
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
        }),
        editOrder:builder.mutation({
            query:({id, status})=>({
                url:`/singleOrder/${id}`,
                method:"PATCH",
                body:status
            }),
        })
    })
})

export const { useGetSingleOrderQuery, useGetAllOrderedQuery, usePurchaseOrderMutation, useEditOrderMutation}=confirmOrder
;

