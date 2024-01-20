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
        getSingleProduct:builder.query({
            query:(id)=>`/getProduct/${id}`
        }),
        editProduct:builder.mutation({
            query: ({id, data})=>({
                url:`/editProduct/${id}`,
                method:" PATCH",
                body:data
            })
        }),
        deleteProduct:builder.mutation({
            query:(id)=>({
                url:`/deleteProduct/${id}`,
                method:"DELETE"
            })
        })
    })
})

export const {useAddProductMutation, useGetSingleProductQuery, useGetProductsQuery, useEditProductMutation, useDeleteProductMutation}=productApi