import { apiSlice } from "../api/apiSlice";
export const productApi= apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        addProduct:builder.mutation({
            query:(data)=>({
                url:"/uploadProduct",
                method:"POST",
                body:data
            })
        }),
        getProducts:builder.query({
            query:()=>`/getProducts`
        }),
        editProduct:builder.mutation({
            query: ({id, data})=>({
                url:`/editProduct/${id}`,
                method:" PATCH",
                body:data
            })
        })
    })
})
export const {useAddProductMutation, useGetProductsQuery, useEditProductMutation}=productApi